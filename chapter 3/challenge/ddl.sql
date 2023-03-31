-- Membuat database 
CREATE DATABASE produk_manufaktur;

-- Membuat tabel produk
CREATE TABLE produk (
    id BIGSERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    kuantitas INT NOT NULL
);

-- membuat tabel komponen
CREATE TABLE komponen (
    id BIGSERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    deskripsi TEXT,
    produk_id INT,
    CONSTRAINT produk_fk FOREIGN KEY (produk_id) REFERENCES produk(id)
);

-- membuat tabel pemasok
CREATE TABLE pemasok (
    id BIGSERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    deskripsi TEXT
);

-- Tabel komponen_pemasok
CREATE TABLE komponen_pemasok(
    id BIGSERIAL PRIMARY KEY,
	komponen_id INT,
    pemasok_id INT,
    CONSTRAINT komponen_fk FOREIGN KEY (komponen_id) REFERENCES komponen(id),
    CONSTRAINT pemasok_fk FOREIGN KEY (pemasok_id) REFERENCES pemasok(id)
);