import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "booknotes",
    password: "Tomasek2012",
    port: 5432,
})
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let books = [];

app.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM book_archive ORDER BY id ASC");
        books = result.rows;
        res.render("index.ejs", {
            listOfBooks: books
        });
    } catch (err) {
        console.log(err);
    }
});

app.post("/add", async (req, res) => {
    res.render("new.ejs")
})

app.post("/new", async (req, res) => {
    const title = req.body.title;
    const recommend = req.body.recommend;
    const readDate = req.body.read_date;
    const description = req.body.description;
    const link = req.body.link;
    const isbn = req.body.isbn;
    const result = await db.query(
        "INSERT INTO book_archive (title, recommendation, read_date, description, link, isbn) VALUES ($1, $2, $3, $4, $5, $6)",
        [title, recommend, readDate, description, link, isbn]

    );
    res.redirect("/");
})

app.post("/edit", async (req, res) => {
    const id = req.body.itemId;
    const item = req.body.updatedItemTitle;
    const recommendation = req.body.updatedItemRecommendation;
    const isbn = req.body.updatedIsbn;
    const readDate = req.body.updatedDate;
    const description = req.body.updatedDescription;
    const link = req.body.updatedLink;
    try {
        await db.query("UPDATE book_archive SET title = ($1), recommendation = ($3), isbn = ($4), read_date = ($5), description = ($6), link = ($7)  WHERE id = $2",
            [item, id, recommendation, isbn, readDate, description, link]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

app.post("/delete", async (req, res) => {
    const id = req.body.itemId;
    try {
        await db.query("DELETE FROM book_archive WHERE id = $1", [id]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

app.get("/sortedByTitleAsc", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM book_archive ORDER BY title ASC");
        books = result.rows;
        res.render("index.ejs", {
            listOfBooks: books
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/sortedByTitleDesc", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM book_archive ORDER BY title DESC");
        books = result.rows;
        res.render("index.ejs", {
            listOfBooks: books
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/sortedByDateReadAsc", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM book_archive ORDER BY read_date ASC");
        books = result.rows;
        res.render("index.ejs", {
            listOfBooks: books
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/sortedByDateReadDesc", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM book_archive ORDER BY read_date DESC");
        books = result.rows;
        res.render("index.ejs", {
            listOfBooks: books
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/sortedByDateAdded", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM book_archive ORDER BY id DESC");
        books = result.rows;
        res.render("index.ejs", {
            listOfBooks: books
        });
    } catch (err) {
        console.log(err);
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});