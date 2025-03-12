const PEOPLE__LIST = [
    {
        name: "Иван",
        specialist: "Врач",
        number: '+7 965 177 91 07'
    },
    {
        name: "Владимир",
        specialist: "Преподаватель", 
        number: '+7 965 177 91 55'
    },
    {
        name: "Виталий",
        specialist: "Студент", 
        number: '+7 965 177 91 87'
    },
    {
        name: "Вит",
        specialist: "Студент", 
        number: '+7 965 177 12 87'
    }
];

class DoctorCard {
    create(specialist, name, number) {
        return `
        <tr class='card--green'>
            <td>${specialist}</td>
            <td>${name}</td>
            <td>${number}</td>
        </tr>
        `;
    }
}

class TeacherCard {
    create(specialist, name, number) {
        return `
        <tr class='card--black'>
            <td>${specialist}</td>
            <td>${name}</td>
            <td>${number}</td>
        </tr>
        `;
    }
}

class StudentCard {
    create(specialist, name, number) {
        return `
        <tr class='card--grey'>
            <td>${specialist}</td>
            <td>${name}</td>
            <td>${number}</td>
        </tr>
        `;
    }
}

class Fabric {
    create(type, name, number) {
        switch (type) {
            case "Врач":
                return new DoctorCard(type, name, number);
            case "Преподаватель":
                return new TeacherCard(type, name, number);
            case "Студент":
                return new StudentCard(type, name, number);
            default:
                return null;
        }
    }
}

const TABLE = document.getElementsByTagName('table')[0]; // Предполагаем, что таблица одна
const fabric = new Fabric();

PEOPLE__LIST.forEach((item) => {
    let specialist = item.specialist;
    let name = item.name;
    let number = item.number;
    let card = fabric.create(specialist, name, number);
    if(card && TABLE) {
        TABLE.innerHTML += card.create(specialist, name, number);
    }
});

// Object.keys(PEOPLE__LIST).forEach((index) => {
//     const fabric = new Fabric();
//     TABLE.innerHTML += fabric.create(PEOPLE__LIST[index]);
//   });