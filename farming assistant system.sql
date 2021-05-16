PGDMP                         x            FarmingAssistantSystem    12.3    12.3 I    l           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            m           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            n           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            o           1262    16393    FarmingAssistantSystem    DATABASE     �   CREATE DATABASE "FarmingAssistantSystem" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_India.1252' LC_CTYPE = 'English_India.1252';
 (   DROP DATABASE "FarmingAssistantSystem";
                postgres    false            �            1259    16474    admin    TABLE     �   CREATE TABLE public.admin (
    adminid bigint NOT NULL,
    adminusername character varying NOT NULL,
    adminpassword character varying NOT NULL
);
    DROP TABLE public.admin;
       public         heap    postgres    false            �            1259    16477    admin_adminid_seq    SEQUENCE     z   CREATE SEQUENCE public.admin_adminid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.admin_adminid_seq;
       public          postgres    false    206            p           0    0    admin_adminid_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.admin_adminid_seq OWNED BY public.admin.adminid;
          public          postgres    false    207            �            1259    16773    adminid_seq    SEQUENCE     w   CREATE SEQUENCE public.adminid_seq
    START WITH 1112
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.adminid_seq;
       public          postgres    false            �            1259    16780    advertisement    TABLE     �   CREATE TABLE public.advertisement (
    cropname character varying NOT NULL,
    quantity bigint NOT NULL,
    id bigint NOT NULL
);
 !   DROP TABLE public.advertisement;
       public         heap    postgres    false            �            1259    16786    advertisement_id_seq    SEQUENCE     }   CREATE SEQUENCE public.advertisement_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.advertisement_id_seq;
       public          postgres    false    211            q           0    0    advertisement_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.advertisement_id_seq OWNED BY public.advertisement.id;
          public          postgres    false    212            �            1259    16837    buycrop    TABLE     �   CREATE TABLE public.buycrop (
    farmer_id integer NOT NULL,
    crop_name character varying(30) NOT NULL,
    crop_price bigint NOT NULL,
    crop_quantity bigint NOT NULL
);
    DROP TABLE public.buycrop;
       public         heap    postgres    false            �            1259    16842    buycrops    TABLE     �   CREATE TABLE public.buycrops (
    "farmerId" bigint NOT NULL,
    "cropName" character varying NOT NULL,
    "cropPrice" bigint NOT NULL,
    "cropQuantity" bigint NOT NULL
);
    DROP TABLE public.buycrops;
       public         heap    postgres    false            �            1259    16845    buycrops_farmerId_seq    SEQUENCE     �   CREATE SEQUENCE public."buycrops_farmerId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."buycrops_farmerId_seq";
       public          postgres    false    219            r           0    0    buycrops_farmerId_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."buycrops_farmerId_seq" OWNED BY public.buycrops."farmerId";
          public          postgres    false    220            �            1259    16882    complaintid_seq    SEQUENCE     x   CREATE SEQUENCE public.complaintid_seq
    START WITH 4
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.complaintid_seq;
       public          postgres    false            �            1259    16854    complaintservice    TABLE     �   CREATE TABLE public.complaintservice (
    complaint_id bigint NOT NULL,
    farmer_id bigint NOT NULL,
    complaint_message character varying NOT NULL,
    complaint_status boolean NOT NULL
);
 $   DROP TABLE public.complaintservice;
       public         heap    postgres    false            �            1259    16857 !   complaintservice_complaint_id_seq    SEQUENCE     �   CREATE SEQUENCE public.complaintservice_complaint_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.complaintservice_complaint_id_seq;
       public          postgres    false    221            s           0    0 !   complaintservice_complaint_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.complaintservice_complaint_id_seq OWNED BY public.complaintservice.complaint_id;
          public          postgres    false    222            �            1259    16863    complaintservice_farmer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.complaintservice_farmer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.complaintservice_farmer_id_seq;
       public          postgres    false    221            t           0    0    complaintservice_farmer_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.complaintservice_farmer_id_seq OWNED BY public.complaintservice.farmer_id;
          public          postgres    false    223            �            1259    16811    crop    TABLE     �   CREATE TABLE public.crop (
    "farmerId" bigint NOT NULL,
    "cropName" character varying NOT NULL,
    "cropPrice" bigint NOT NULL,
    "cropQuantity" bigint NOT NULL
);
    DROP TABLE public.crop;
       public         heap    postgres    false            �            1259    16814    crop_farmerId_seq    SEQUENCE     |   CREATE SEQUENCE public."crop_farmerId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."crop_farmerId_seq";
       public          postgres    false    215            u           0    0    crop_farmerId_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."crop_farmerId_seq" OWNED BY public.crop."farmerId";
          public          postgres    false    216            �            1259    16416    farmer    TABLE       CREATE TABLE public.farmer (
    farmerid bigint NOT NULL,
    farmername character varying NOT NULL,
    farmerpassword character varying NOT NULL,
    farmeraddress character varying NOT NULL,
    farmerphoneno character varying NOT NULL,
    farmerusername character varying
);
    DROP TABLE public.farmer;
       public         heap    postgres    false            �            1259    16419    farmer_farmerid_seq    SEQUENCE     |   CREATE SEQUENCE public.farmer_farmerid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.farmer_farmerid_seq;
       public          postgres    false    202            v           0    0    farmer_farmerid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.farmer_farmerid_seq OWNED BY public.farmer.farmerid;
          public          postgres    false    203            �            1259    16835    farmer_id_seq    SEQUENCE     y   CREATE SEQUENCE public.farmer_id_seq
    START WITH 1112
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.farmer_id_seq;
       public          postgres    false            �            1259    16775    farmerid_seq    SEQUENCE     x   CREATE SEQUENCE public.farmerid_seq
    START WITH 8972
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.farmerid_seq;
       public          postgres    false            �            1259    16809    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            �            1259    16873    id_seq    SEQUENCE     o   CREATE SEQUENCE public.id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.id_seq;
       public          postgres    false            �            1259    16795    seq    SEQUENCE     o   CREATE SEQUENCE public.seq
    START WITH 14
    INCREMENT BY 100
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.seq;
       public          postgres    false            �            1259    16442    supplier    TABLE     '  CREATE TABLE public.supplier (
    supplierid bigint NOT NULL,
    suppliername character varying NOT NULL,
    supplierpassword character varying NOT NULL,
    supplieraddress character varying NOT NULL,
    supplierphoneno character varying NOT NULL,
    supplierusername character varying
);
    DROP TABLE public.supplier;
       public         heap    postgres    false            �            1259    16445    supplier_supplierid_seq    SEQUENCE     �   CREATE SEQUENCE public.supplier_supplierid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.supplier_supplierid_seq;
       public          postgres    false    204            w           0    0    supplier_supplierid_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.supplier_supplierid_seq OWNED BY public.supplier.supplierid;
          public          postgres    false    205            �            1259    16777    supplierid_seq    SEQUENCE     z   CREATE SEQUENCE public.supplierid_seq
    START WITH 7779
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.supplierid_seq;
       public          postgres    false            �            1259    16876    tips    TABLE     a   CREATE TABLE public.tips (
    id bigint NOT NULL,
    tipsmessage character varying NOT NULL
);
    DROP TABLE public.tips;
       public         heap    postgres    false            �
           2604    16479    admin adminid    DEFAULT     n   ALTER TABLE ONLY public.admin ALTER COLUMN adminid SET DEFAULT nextval('public.admin_adminid_seq'::regclass);
 <   ALTER TABLE public.admin ALTER COLUMN adminid DROP DEFAULT;
       public          postgres    false    207    206            �
           2604    16788    advertisement id    DEFAULT     t   ALTER TABLE ONLY public.advertisement ALTER COLUMN id SET DEFAULT nextval('public.advertisement_id_seq'::regclass);
 ?   ALTER TABLE public.advertisement ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            �
           2604    16847    buycrops farmerId    DEFAULT     z   ALTER TABLE ONLY public.buycrops ALTER COLUMN "farmerId" SET DEFAULT nextval('public."buycrops_farmerId_seq"'::regclass);
 B   ALTER TABLE public.buycrops ALTER COLUMN "farmerId" DROP DEFAULT;
       public          postgres    false    220    219            �
           2604    16859    complaintservice complaint_id    DEFAULT     �   ALTER TABLE ONLY public.complaintservice ALTER COLUMN complaint_id SET DEFAULT nextval('public.complaintservice_complaint_id_seq'::regclass);
 L   ALTER TABLE public.complaintservice ALTER COLUMN complaint_id DROP DEFAULT;
       public          postgres    false    222    221            �
           2604    16865    complaintservice farmer_id    DEFAULT     �   ALTER TABLE ONLY public.complaintservice ALTER COLUMN farmer_id SET DEFAULT nextval('public.complaintservice_farmer_id_seq'::regclass);
 I   ALTER TABLE public.complaintservice ALTER COLUMN farmer_id DROP DEFAULT;
       public          postgres    false    223    221            �
           2604    16816    crop farmerId    DEFAULT     r   ALTER TABLE ONLY public.crop ALTER COLUMN "farmerId" SET DEFAULT nextval('public."crop_farmerId_seq"'::regclass);
 >   ALTER TABLE public.crop ALTER COLUMN "farmerId" DROP DEFAULT;
       public          postgres    false    216    215            �
           2604    16421    farmer farmerid    DEFAULT     r   ALTER TABLE ONLY public.farmer ALTER COLUMN farmerid SET DEFAULT nextval('public.farmer_farmerid_seq'::regclass);
 >   ALTER TABLE public.farmer ALTER COLUMN farmerid DROP DEFAULT;
       public          postgres    false    203    202            �
           2604    16447    supplier supplierid    DEFAULT     z   ALTER TABLE ONLY public.supplier ALTER COLUMN supplierid SET DEFAULT nextval('public.supplier_supplierid_seq'::regclass);
 B   ALTER TABLE public.supplier ALTER COLUMN supplierid DROP DEFAULT;
       public          postgres    false    205    204            U          0    16474    admin 
   TABLE DATA           F   COPY public.admin (adminid, adminusername, adminpassword) FROM stdin;
    public          postgres    false    206   0N       Z          0    16780    advertisement 
   TABLE DATA           ?   COPY public.advertisement (cropname, quantity, id) FROM stdin;
    public          postgres    false    211   �N       a          0    16837    buycrop 
   TABLE DATA           R   COPY public.buycrop (farmer_id, crop_name, crop_price, crop_quantity) FROM stdin;
    public          postgres    false    218   �N       b          0    16842    buycrops 
   TABLE DATA           W   COPY public.buycrops ("farmerId", "cropName", "cropPrice", "cropQuantity") FROM stdin;
    public          postgres    false    219   !O       d          0    16854    complaintservice 
   TABLE DATA           h   COPY public.complaintservice (complaint_id, farmer_id, complaint_message, complaint_status) FROM stdin;
    public          postgres    false    221   nO       ^          0    16811    crop 
   TABLE DATA           S   COPY public.crop ("farmerId", "cropName", "cropPrice", "cropQuantity") FROM stdin;
    public          postgres    false    215   �O       Q          0    16416    farmer 
   TABLE DATA           t   COPY public.farmer (farmerid, farmername, farmerpassword, farmeraddress, farmerphoneno, farmerusername) FROM stdin;
    public          postgres    false    202   P       S          0    16442    supplier 
   TABLE DATA           �   COPY public.supplier (supplierid, suppliername, supplierpassword, supplieraddress, supplierphoneno, supplierusername) FROM stdin;
    public          postgres    false    204   ;Q       h          0    16876    tips 
   TABLE DATA           /   COPY public.tips (id, tipsmessage) FROM stdin;
    public          postgres    false    225   �R       x           0    0    admin_adminid_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.admin_adminid_seq', 1, false);
          public          postgres    false    207            y           0    0    adminid_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.adminid_seq', 1126, true);
          public          postgres    false    208            z           0    0    advertisement_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.advertisement_id_seq', 1, false);
          public          postgres    false    212            {           0    0    buycrops_farmerId_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."buycrops_farmerId_seq"', 1, false);
          public          postgres    false    220            |           0    0    complaintid_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.complaintid_seq', 4, false);
          public          postgres    false    226            }           0    0 !   complaintservice_complaint_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.complaintservice_complaint_id_seq', 1, false);
          public          postgres    false    222            ~           0    0    complaintservice_farmer_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.complaintservice_farmer_id_seq', 1, false);
          public          postgres    false    223                       0    0    crop_farmerId_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."crop_farmerId_seq"', 1, false);
          public          postgres    false    216            �           0    0    farmer_farmerid_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.farmer_farmerid_seq', 1, false);
          public          postgres    false    203            �           0    0    farmer_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.farmer_id_seq', 1112, false);
          public          postgres    false    217            �           0    0    farmerid_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.farmerid_seq', 9018, true);
          public          postgres    false    209            �           0    0    hibernate_sequence    SEQUENCE SET     @   SELECT pg_catalog.setval('public.hibernate_sequence', 5, true);
          public          postgres    false    214            �           0    0    id_seq    SEQUENCE SET     5   SELECT pg_catalog.setval('public.id_seq', 23, true);
          public          postgres    false    224            �           0    0    seq    SEQUENCE SET     3   SELECT pg_catalog.setval('public.seq', 514, true);
          public          postgres    false    213            �           0    0    supplier_supplierid_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.supplier_supplierid_seq', 1, false);
          public          postgres    false    205            �           0    0    supplierid_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.supplierid_seq', 7793, true);
          public          postgres    false    210            �
           2606    16841    buycrop buycrop_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.buycrop
    ADD CONSTRAINT buycrop_pkey PRIMARY KEY (farmer_id);
 >   ALTER TABLE ONLY public.buycrop DROP CONSTRAINT buycrop_pkey;
       public            postgres    false    218            �
           2606    16429    farmer farmerid 
   CONSTRAINT     S   ALTER TABLE ONLY public.farmer
    ADD CONSTRAINT farmerid PRIMARY KEY (farmerid);
 9   ALTER TABLE ONLY public.farmer DROP CONSTRAINT farmerid;
       public            postgres    false    202            �
           2606    16455    supplier supplierid 
   CONSTRAINT     Y   ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT supplierid PRIMARY KEY (supplierid);
 =   ALTER TABLE ONLY public.supplier DROP CONSTRAINT supplierid;
       public            postgres    false    204            U   X   x�m�+�0@�{���f�H�*�>���q��c:��^�[�� �o��08O�<�����Bl%��{����@�<�<�{��~~hj      Z   ,   x�KN-JM��4�44�rN,��L��/O-*�8MM�b���� �	�      a   =   x�3426��HM,�4200�4�2426��LN�44 ����8R��j8��b���� ��      b   =   x�3426��HM,�4200�4�2426��LN�44 ����8R��j8��b���� ��      d   S   x�351細47�tK-*��ɬJ-*V��/QH,K��IL�I�,�25� )2�O,I-R��OO��KWȄ�,(�/H-�L����� �6�      ^   =   x�3426��HM,�4200�4�2426��LN�44 ����8R��j8��b���� ��      Q     x����j�0Eף���"ٍ��&B��f�U�����`ܯ��8}�e��s�NQ��Z�blM0����*x@�k�;��x���8��� �E.�r�o��#ˊ2Wp�)��K��lD���Z�݄�8��x�Wq����Y4ћ�3��ߣ�@��؆��5|K��
�����R�5b�n!� �R��y2g�Bjn5�����ʧ���q��2��:l�~QIz{�4���V����̻6������J����4�#]�{m�z��Iz��      S   �  x�m�]o� ���_�0�x��^�#i��M�4{כ�Ԟ��w Ok6+���}�!���C۳a�����_f�����b�벌[��ж��wZ���N#�����8�+"2����~�Tc�
�N�7�>�O�_�,���-���*0;h�z/􊽠��J������ݫ�2��A�J��(84u ���$��ī�s�H���=���jg��y�y�v���I��usmI>Id;�!Yyy�q�zez�^�M��0m��$)�@>Pcύ���hL�`9C;I2�]J>��#
)���ʺUY&8K�x�M�Oh��)�Ӻ}����
���}��k��?�����NDM�X�taWO Ъ�z�&�5�A*�gb�	qu���5�>|����3�E�v�e�_�V�}      h   ^  x��U]��H|���~A�͆�!�H"v��fAZi_&��`��fƉ̯�걳�݁"9�=�U]U3�ώ�fG��Y
��@[�$�q$N��$;&��T1���7�G�x�6�V&�i*������ٔ�+�W/.ю]�B.J��\!(^�@KIj���o�o9d�g�/h�:�xw:vm��I��v^,oL�L�v50L��A�W�����ƕ�)Q�<q��=
�d�wJXG;����(�0 �i>���^��3��8�;x�cYe������ eE��u!��/&'�x��)"HY�4�
WQM`C��2]�|�:;����_��K�"��%Uw�u��5���k��КB"C3̣K�eL�����|\r@�I��iMQ�*����i��"�%*;t����ї�>�['���ms>;���~J�A�6��G���A���1�������04�w�K�ԥx�"7H���q�~��1�qQ0U��E$���}L��m���+ 2B�Ă���V�m06i6b���6k}�6#V�*+d��L���yt�KM�c�?�Bru1��-F0u���{����فٽ��z���T��^]�E����'���b�0�A��`�^���O��þ7u<�)�!-wIN�B�7t��J��&�=C�雤����w\5�8�.���� æS�;/Ч��ǋ�<�-�Ԙ��� 6�5\ՇwX�U�Q���f�V���h#�pDrv�{�����$<��/g��QF��������h_	&��m�1�I?F����JX8�f١_��\t��p/��=�{|�kIr���Ap�n>nYl�ChK{d�*���]�Q��M[ssk�?t�G �{=�o*�N�����_>;�J     