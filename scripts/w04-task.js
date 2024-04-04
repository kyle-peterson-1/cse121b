/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kyle Peterson",
    photo: "images/IMG_4157.JPG",
    favoriteFoods: [
        'tacos',
        'chicken',
        'spaghetti'
    ],
    hobbies: [
        'snowboarding',
        'wworking out',
        'building morotcycles',
        'spending time with  my wife'
    ],
    placesLived: [

    ],

};

myProfile.placesLived.push(
    {
        place: 'Queen Creek, AZ',
        length: '20 years',
        place: 'San Francisco, CA',
        length: '1 year',
        place: 'provo, UT',
        length: '1 year',
    }
);

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;



myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document = food;
    document.querySelector('#favor-foods').appendChild(li);
});

myProfile.placesLived.forEach(hobbies => {
    let ul = document.createElement('ul');
    dt.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(ul);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place;
    document.querySelector('#places-lived').appendChild(dt);
});

myProfile.placesLived.forEach(length => {
    let dd = document.createElement('dd');
    dd.textContent = length;
    document.querySelector('#places-lived').appendChild(dd);
});
