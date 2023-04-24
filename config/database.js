import mysql from "mysql2";

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'14275565',
    database:'apidb'
});

const connectDB =() =>{
    connection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        })
}



export default{ connection , connectDB};


