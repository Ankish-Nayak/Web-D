fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  let products = json;
  initialize(products);
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});

// sets up the app logic, declares required variables, contains all the other functions
function initialize(products) {
  // grab the UI elements that we need to manipulate
  const category = document.querySelector('#chooseCategory');
  const searchTerm = document.querySelector('#searchTerm');
  const searchBtn = document.querySelector('.filter');
  const section = document.querySelector('section');

  // keep a record of what the last category and search term entered were
  let lastCategory = category.value;
  // no search has been made yet
  let lastSearch = '';

  // these contain the results of filtering by category, and search term
  // finalGroup will contain the products that need to be displayed after
  // the searching has been done. Each will be an array containing objects.
  // Each object will represent a product
  let categoryGroup;
  let finalGroup;

  // To start with, set finalGroup to equal the entire products database
  // then run updateDisplay(), so ALL products are displayed initially.
  finalGroup = products;
  updateDisplay();

  // Set both to equal an empty array, in time for searches to be run
  categoryGroup = [];
  finalGroup = [];

  // when the search button is clicked, invoke selectCategory() to start
  // a search running to select the category of products we want to display
  searchBtn.onclick = selectCategory;

  function selectCategory(e) {
    // Use preventDefault() to stop the form submitting — that would ruin
    // the experience
    e.preventDefault();

    // Set these back to empty arrays, to clear out the previous search
    categoryGroup = [];
    finalGroup = [];

    // if the category and search term are the same as they were the last time a
    // search was run, the results will be the same, so there is no point running
    // it again — just return out of the function
    if(category.value === lastCategory && searchTerm.value.trim() === lastSearch) {
      return;
    } else {
      // update the record of last category and search term
      lastCategory = category.value;
      lastSearch = searchTerm.value.trim();
      // In this case we want to select all products, then filter them by the search
      // term, so we just set categoryGroup to the entire JSON object, then run selectProducts()
      if(category.value === 'All') {
        categoryGroup = products;
        selectProducts();
      // If a specific category is chosen, we need to filter out the products not in that
      // category, then put the remaining products inside categoryGroup, before running
      // selectProducts()
      } else {
        // the values in the <option> elements are uppercase, whereas the categories
        // store in the JSON (under "type") are lowercase. We therefore need to convert
        // to lower case before we do a comparison
        let lowerCaseType = category.value.toLowerCase();
        for(let i = 0; i < products.length ; i++) {
          // If a product's type property is the same as the chosen category, we want to
          // display it, so we push it onto the categoryGroup array
          if(products[i].type === lowerCaseType) {
            categoryGroup.push(products[i]);
          }
        }

        // Run selectProducts() after the filtering has been done
        selectProducts();
      }
    }
  }

  // selectProducts() Takes the group of products selected by selectCategory(), and further
  // filters them by the tiered search term (if one has been entered)
  function selectProducts() {
    // If no search term has been entered, just make the finalGroup array equal to the categoryGroup
    // array — we don't want to filter the products further — then run updateDisplay().
    if(searchTerm.value.trim() === '') {
      finalGroup = categoryGroup;
      updateDisplay();
    } else {
      // Make sure the search term is converted to lower case before comparison. We've kept the
      // product names all lower case to keep things simple
      let lowerCaseSearchTerm = searchTerm.value.trim().toLowerCase();
      // For each product in categoryGroup, see if the search term is contained inside the product name
      // (if the indexOf() result doesn't return -1, it means it is) — if it is, then push the product
      // onto the finalGroup array
      for(let i = 0; i < categoryGroup.length ; i++) {
        if(categoryGroup[i].name.indexOf(lowerCaseSearchTerm) !== -1) {
          finalGroup.push(categoryGroup[i]);
        }
      }

      // run updateDisplay() after this second round of filtering has been done
      updateDisplay();
    }

  }

  // start the process of updating the display with the new set of products
  function updateDisplay() {
    // remove the previous contents of the <section> element
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }

    // if no products match the search term, display a "No results to display" message
    if(finalGroup.length === 0) {
      const para = document.createElement('p');
      para.textContent = 'No results to display!';
      section.appendChild(para);
    // for each product we want to display, pass its product object to fetchBlob()
    } else {
      for(let i = 0; i < finalGroup.length; i++) {
        fetchBlob(finalGroup[i]);
      }
    }
  }

  // fetchBlob uses fetch to retrieve the image for that product, and then sends the
  // resulting image display URL and product object on to showProduct() to finally
  // display it
  function fetchBlob(product) {
    // construct the URL path to the image file from the product.image property
    let url = 'images/' + product.image;
    // Use fetch to fetch the image, and convert the resulting response to a blob
    // Again, if any errors occur we report them in the console.
    fetch(url).then(function(response) {
        return response.blob();
    }).then(function(blob) {
      // Convert the blob to an object URL — this is basically an temporary internal URL
      // that points to an object stored inside the browser
      let objectURL = URL.createObjectURL(blob);
      // invoke showProduct
      showProduct(objectURL, product);
    });
  }

  // Display a product inside the <section> element
  function showProduct(objectURL, product) { 
    const item = document.createElement('div');
    const top = document.createElement('div');
    const bottom = document.createElement('div');
    const span = document.createElement('span');
    const image = document.createElement('img');
    const icon = document.createElement('img');

    item.setAttribute('class','item');
    top.setAttribute('class','top');
    bottom.setAttribute('class','bottom');
    
    image.src = objectURL;
    icon.src = 'icons/' +product.type+ '.png';
    span.textContent = product.name;
    bottom.textContent = `$${product.price}`;
    top.appendChild(icon);
    top.appendChild(span);
    item.appendChild(image);
    item.appendChild(top);
    item.appendChild(bottom);
    console.log(item);
    section.appendChild(item);
  }
}