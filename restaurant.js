const restaurantData = {
  name: "Uncle Macs",
  description: "Fast food restaurant in Espirito Street",
  menu: ["Pork Tapa", "Fried Lumpia", "Fried Chicken", "And many more"],
  imgSrc: "ascb logo/uncle macs rest. html.jpg",
  website: "https://www.facebook.com/UncleMacsOfficial/menu/",
  email: "unclemacs@gmail.com",
  phone: "0945 344 8015",
  address: "Espirito Street",
  callLink: "tel:09453448015"
};

// const JollibeeData = {
//   name: "Jollibee",
//   description: "Jollibee is the largest fast food chain brand in the Philippines, operating a network of more than 1,500 stores in 17 countries.",
//   menu: ["6 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family", "8 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family", "6 - pc. Chickenjoy w/ Palabok Family Pan", "8 - pc. Chickenjoy w/ Palabok Family Pan"],
//   imgSrc: "ascb logo/jollibee.jpg",
//   website: "https://www.jollibee.com.ph",
//   email: "contact@jollibee.com",
//   phone: "0945 344 8015",
//   address: "Espirito Street",
//   callLink: "tel:09453448015"
// };


// const KrCornerData = {
//   name: "Kr Corner",
//   description: "",
//   menu: ["Pizza","Spaghettie","Carbonara","Lasagna","And Many More....."],
//   imgSrc: "kr corner.jpg",
//   website: "https://www.jollibee.com.ph",
//   email: "contact@krcorner.com",
//   phone: "0945 365 8017",
//   address: "Espirito Street",
//   callLink: "tel:09453448015"
// }

function generateGoogleMapsLink(address) {
  console.log(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function updateRestaurantInfo(data) {
  console.log(updateRestaurantInfo)
  $('#restau_name').text(data.name);
  $('#restau_desc').html(`<strong>${data.description}</strong>`);
  $('#menu_items').html(data.menu.map(item => `<li>${item}</li>`).join(''));
  $('#restau_img').attr('src', data.imgSrc);
  $('#restau_link').attr('href', data.website);
  $('#restau_website').html(`<a href="${data.website}" rel="external" data-role="button">Visit Our Website Here</a>`);
  $('#contact_email').text(data.email);
  $('#contact_phone').text(data.phone);
  $('#map_link').attr('href', generateGoogleMapsLink(data.address));
  $('#call_link').attr('href', data.callLink);
}

let initRatingChange =() => {
  console.log(initRatingChange)
  var SelectedOptionClass = $('option:selected').attr('class');
  $('div.ui-select').addClass(SelectedOptionClass);
  $('#note_utilisateur').on('change', function() {
    $('div.ui-select').removeClass(SelectedOptionClass);
    SelectedOptionClass = $('option:selected').attr('class');
    $('div.ui-select').addClass(SelectedOptionClass);
  });
}

$(document).on('pageinit', '#restau', function() {
 
  updateRestaurantInfo(restaurantData);
  initRatingChange();

  $('#restaurant_selector').on('change', function() {
    const selectedRestaurant = $(this).val();
    if (selectedRestaurant === 'UncleMacs') {
      updateRestaurantInfo(restaurantData);
   
    }
  });
});
