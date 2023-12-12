CREATE TABLE book_archive(
	id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL UNIQUE,
	recommendation VARCHAR(2),
	read_date DATE,
	description VARCHAR,
	link VARCHAR,
	ISBN VARCHAR(13)
);


INSERT INTO book_archive (title, recommendation, read_date, description, link, isbn) 
VALUES ('Poo bear', 7, '2023-11-17', 'Very good book', 'https://www.megaknihy.cz/v-ceskem-a-slovenskem-jazyce/525588-medvidek-pu.html?utm_si=RFlidjRTZUc2TlRJMU5UZzROVEkxTlRnNA==&matchtype=&network=x&device=c&creative=&keyword=&placement=&param1=&param2=&adposition=&campaignid=20193818109&adgroupid=&feeditemid=&targetid=&loc_physical_ms=9062897&loc_interest_ms=&searchtype=&gad_source=1&gclid=Cj0KCQiA3uGqBhDdARIsAFeJ5r3spXgZXllSl3vqrZwQldgLRBfqqk7QTp1RtuR9dHaXATAtudRRpfoaAocLEALw_wcB', '9780416239102'),
('Quinn', 8, '2023-10-16', 'Very bad book', 'https://www.megaknihy.cz/thrillery/2876275-quinn.html?utm_si=RFlidjRTZUc2TWpnM05qSTNOVEk0TnpZeU56VT0=&matchtype=&network=x&device=c&creative=&keyword=&placement=&param1=&param2=&adposition=&campaignid=20193818109&adgroupid=&feeditemid=&targetid=&loc_physical_ms=9062897&loc_interest_ms=&searchtype=&gad_source=1&gclid=Cj0KCQiA3uGqBhDdARIsAFeJ5r1kQU6OPeDgA7zeBQr4tW4Cps4LqGPgkJMqKFSIdd5VBjLOBFg8qWEaAjP5EALw_wcB', '9780312651213')