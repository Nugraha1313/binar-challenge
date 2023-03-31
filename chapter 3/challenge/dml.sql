-- CRUD
-- Tabel Produk
INSERT INTO 
	produk (nama, kuantitas)
VALUES
  ('Kursi', 50),
  ('Meja', 30);

-- Tabel Komponen
INSERT INTO 
	komponen (nama, deskripsi, produk_id)
VALUES
  ('Kayu', 'Bahan utama', 1),
  ('Kain', 'Bahan pelapis', 1),
  ('kulit', 'kulit dari buaya', 1),
  ('Kayu', 'Bahan utama', 2),
  ('Kain', 'Bahan pelapis', 2);

-- Tabel Pemasok
INSERT INTO 
	pemasok (nama, deskripsi)
VALUES
  ('CV. Setia Budi Kulit', 'Merupakan Pemasok Kulit . ALamat : Jl. Abadi no. 1'),
  ('PT. Sentosa Kain', 'Jl. Abadi no. 2'),
  ('CV. Agus Kayu', 'Jl. Abadi no. 3');

-- Tabel Pemasok_Komponen
INSERT INTO 
	komponen_pemasok(komponen_id, pemasok_id)
VALUES
  (1, 3),
  (2, 2),
  (3, 1),
  (4, 3),
  (5, 2);

-- Read data
SELECT * FROM produk;
SELECT * FROM komponen;
SELECT * FROM pemasok;
SELECT * FROM komponen_pemasok;

-- Update Data
UPDATE 
	komponen
SET 
	deskripsi = 'Bahan Utama Kerangka Kursi'
	WHERE id = 1;

-- Update Data from Table suppliers
UPDATE 
	pemasok
SET 
	deskripsi = 'Merupakan Pemasok Kulit. Jl. Abadi no. 2'
	WHERE id = 2;

-- Delete Data from Table suppliers
DELETE FROM 
	produk
WHERE 
	id = 1;

DELETE FROM 
	komponen
WHERE 
	id = 2;

-- Membaca data tabel dan komponennya
SELECT
    produk.nama AS produk,
    komponen.nama AS komponen,
    komponen.deskripsi AS deskripsi_komponen
FROM 
	produk
    JOIN komponen ON komponen.produk_id = produk.id
GROUP BY
    produk.id, 
	produk.nama, 
	komponen.nama, 
	komponen.deskripsi
Order BY
    produk.id;
	
-- Menampilkan data komponen dengan pemasok
SELECT
    komponen.nama AS komponen,
    pemasok.nama AS pemasok
FROM komponen_pemasok 
    JOIN komponen ON komponen_pemasok.komponen_id = komponen.id
    JOIN pemasok ON komponen_pemasok.pemasok_id = pemasok.id
GROUP BY
	komponen.nama,
	pemasok.nama,
    komponen_pemasok.komponen_id
ORDER BY
    komponen_pemasok.komponen_id; 