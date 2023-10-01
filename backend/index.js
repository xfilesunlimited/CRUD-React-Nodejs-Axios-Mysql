import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bigbossdata!",
    database: "test02",
  });
  
  app.use(express.json())
  app.use(cors())
  
  app.get("/", (req, res) => {
    res.json("hello this is the backend");
  });

  app.get("/books2", (req,res)=>{
    const q = "SELECT storenum,sum(grosssale) as grosssale,sum(netsales) as netsales,sum(grossrefund) as grossrefund,sum(lessdiscount) as lessdiscount,sum(oldgrandtotal) as oldgrandtotal,sum(newgrandtotal) as newgrandtotal,DATE_FORMAT(date,'%Y-%m-%d') as date FROM books Where date = curdate() GROUP BY(storenum)"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  })


  app.get("/books", (req,res)=>{
    const q = "SELECT storenum,sum(grosssale) as grosssale,sum(netsales) as netsales,sum(grossrefund) as grossrefund,sum(lessdiscount) as lessdiscount,sum(oldgrandtotal) as oldgrandtotal,sum(newgrandtotal) as newgrandtotal FROM books Where date = curdate()"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  })



  app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been created succefully.");
    });
  });

app.delete("/books/:id", (req,res)=>{
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?"

  db.query(q,[bookId], (err,data)=>{
    if(err) return res.json(err);
        return res.json("Book has been deleted created succefully.");
});
});


app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
  app.listen(8800, () => {
    console.log("Connected to backend.");
  });