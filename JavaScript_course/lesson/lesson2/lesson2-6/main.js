let user = {
    id: 1,
    name: 'Vasya',
};
// додавання нової характеристики об'єкту, якщо немає до нього доступу

    user.age = 31;
    // або
    user['status'] = false;
    // цей варіант довший але динамічніший
    console.log(user);

    delete user.id;
    console.log(user);