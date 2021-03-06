const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect : 'sqlite',
    storage : __dirname + '/databases.db'
});

const subjectsDB = db.define('subjects',{
    sub_code : {
        type : Sequelize.STRING,
        allowNull : false,
        primaryKey : true
    },
    sub_name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    date_of_exam : {
        type : Sequelize.DATEONLY,
        allowNull : false
    },
    time_of_exam : {
        type : Sequelize.TIME,
        allowNull : false
    },
    exam_status : {
        type : Sequelize.INTEGER,
        defaultValue : 0
    },
    ques_cnt : {
        type : Sequelize.INTEGER
    },
    exam_duration : {
        type : Sequelize.INTEGER,
        allowNull: false
    }
});

const quesDB = db.define('ques',{
    sub_code : {
        type : Sequelize.STRING,
        allowNull : false
    },
    question : {
        type : Sequelize.STRING,
        allowNull : false
    },
    option1 : {
        type : Sequelize.STRING,
        allowNull : false
    },
    option2 : {
        type : Sequelize.STRING,
        allowNull : false
    },
    option3 : {
        type : Sequelize.STRING,
        allowNull : false
    },
    option4 : {
        type : Sequelize.STRING,
        allowNull : false
    },
    answer : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

const marksDB = db.define('marks',{
    sub_code : {
        type : Sequelize.STRING,
        allowNull : false,
        primaryKey : true
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false,
        primaryKey : true
    },
    marks_given : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
});

const usersDB = db.define('users',{
    username : {
        type : Sequelize.STRING,
        allowNull : false,
        primaryKey : true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    category : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

db.sync().then(()=>{
    console.log("All DataBases Ready!\nGood To Go");
})

module.exports = {
    subjectsDB,
    quesDB,
    marksDB,
    usersDB
};