--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: komponen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.komponen (
    id bigint NOT NULL,
    nama character varying(100) NOT NULL,
    deskripsi text,
    produk_id integer
);


ALTER TABLE public.komponen OWNER TO postgres;

--
-- Name: komponen_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.komponen_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.komponen_id_seq OWNER TO postgres;

--
-- Name: komponen_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.komponen_id_seq OWNED BY public.komponen.id;


--
-- Name: komponen_pemasok; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.komponen_pemasok (
    id bigint NOT NULL,
    komponen_id integer,
    pemasok_id integer
);


ALTER TABLE public.komponen_pemasok OWNER TO postgres;

--
-- Name: komponen_pemasok_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.komponen_pemasok_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.komponen_pemasok_id_seq OWNER TO postgres;

--
-- Name: komponen_pemasok_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.komponen_pemasok_id_seq OWNED BY public.komponen_pemasok.id;


--
-- Name: pemasok; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pemasok (
    id bigint NOT NULL,
    nama character varying(100) NOT NULL,
    deskripsi text
);


ALTER TABLE public.pemasok OWNER TO postgres;

--
-- Name: pemasok_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pemasok_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pemasok_id_seq OWNER TO postgres;

--
-- Name: pemasok_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pemasok_id_seq OWNED BY public.pemasok.id;


--
-- Name: produk; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produk (
    id bigint NOT NULL,
    nama character varying(100) NOT NULL,
    kuantitas integer NOT NULL
);


ALTER TABLE public.produk OWNER TO postgres;

--
-- Name: produk_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produk_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.produk_id_seq OWNER TO postgres;

--
-- Name: produk_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produk_id_seq OWNED BY public.produk.id;


--
-- Name: komponen id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen ALTER COLUMN id SET DEFAULT nextval('public.komponen_id_seq'::regclass);


--
-- Name: komponen_pemasok id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen_pemasok ALTER COLUMN id SET DEFAULT nextval('public.komponen_pemasok_id_seq'::regclass);


--
-- Name: pemasok id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pemasok ALTER COLUMN id SET DEFAULT nextval('public.pemasok_id_seq'::regclass);


--
-- Name: produk id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produk ALTER COLUMN id SET DEFAULT nextval('public.produk_id_seq'::regclass);


--
-- Data for Name: komponen; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.komponen (id, nama, deskripsi, produk_id) FROM stdin;
2	Kain	Bahan pelapis	1
3	kulit	kulit dari buaya	1
4	Kayu	Bahan utama	2
5	Kain	Bahan pelapis	2
1	Kayu	Bahan Utama Kerangka Kursi	1
\.


--
-- Data for Name: komponen_pemasok; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.komponen_pemasok (id, komponen_id, pemasok_id) FROM stdin;
1	1	3
2	2	2
3	3	1
4	4	3
5	5	2
\.


--
-- Data for Name: pemasok; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pemasok (id, nama, deskripsi) FROM stdin;
1	CV. Setia Budi Kulit	Merupakan Pemasok Kulit . ALamat : Jl. Abadi no. 1
3	CV. Agus Kayu	Jl. Abadi no. 3
2	PT. Sentosa Kain	Merupakan Pemasok Kulit. Jl. Abadi no. 2
\.


--
-- Data for Name: produk; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produk (id, nama, kuantitas) FROM stdin;
1	Kursi	50
2	Meja	30
\.


--
-- Name: komponen_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.komponen_id_seq', 5, true);


--
-- Name: komponen_pemasok_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.komponen_pemasok_id_seq', 5, true);


--
-- Name: pemasok_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pemasok_id_seq', 3, true);


--
-- Name: produk_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produk_id_seq', 2, true);


--
-- Name: komponen_pemasok komponen_pemasok_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen_pemasok
    ADD CONSTRAINT komponen_pemasok_pkey PRIMARY KEY (id);


--
-- Name: komponen komponen_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen
    ADD CONSTRAINT komponen_pkey PRIMARY KEY (id);


--
-- Name: pemasok pemasok_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pemasok
    ADD CONSTRAINT pemasok_pkey PRIMARY KEY (id);


--
-- Name: produk produk_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produk
    ADD CONSTRAINT produk_pkey PRIMARY KEY (id);


--
-- Name: komponen_pemasok komponen_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen_pemasok
    ADD CONSTRAINT komponen_fk FOREIGN KEY (komponen_id) REFERENCES public.komponen(id);


--
-- Name: komponen_pemasok pemasok_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen_pemasok
    ADD CONSTRAINT pemasok_fk FOREIGN KEY (pemasok_id) REFERENCES public.pemasok(id);


--
-- Name: komponen produk_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.komponen
    ADD CONSTRAINT produk_fk FOREIGN KEY (produk_id) REFERENCES public.produk(id);


--
-- PostgreSQL database dump complete
--

