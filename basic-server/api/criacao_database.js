database(`CREATE TABLE IF NOT EXISTS ENDERECO (
    CODIGO INT PRIMARY KEY UNIQUE,
    RUA VARCHAR(45) NOT NULL, 
    BAIRRO VARCHAR(45) NOT NULL,
    CIDADE VARCHAR(45) NOT NULL,
    ESTADO VARCHAR(45) NOT NULL
)`)
    .then(result => {
        console.log('Tabela ENDERECO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela ENDERECO');
    });


database(`CREATE TABLE IF NOT EXISTS PESSOA (
        CPF CHAR(11) PRIMARY KEY UNIQUE,
        NOME VARCHAR(45) NOT NULL,
        IDADE INT,
        ENDERECO_CODIGO INT NOT NULL, 
        FOREIGN KEY (ENDERECO_CODIGO) REFERENCES ENDERECO(CODIGO) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela PESSOA criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela PESSOA');
    });


database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    CODIGO INT PRIMARY KEY UNIQUE,
    EMAIL VARCHAR(100),
    USERNAME VARCHAR(45) NOT NULL, 
    PASSWORD VARCHAR(15) NOT NULL,
    PESSOA_CPF CHAR(11) NOT NULL,
    FOREIGN KEY(PESSOA_CPF) REFERENCES PESSOA(CPF) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela CLIENTE criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela CLIENTE');
    });


database(`CREATE TABLE IF NOT EXISTS CLASSE (
    CODIGO INT PRIMARY KEY UNIQUE,
    CLASSE VARCHAR(45) NOT NULL
)`)
    .then(result => {
        console.log('Tabela CLASSE criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela CLASSE');
    });


database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    CODIGO INT PRIMARY KEY,
    URL VARCHAR(200),
    INSTRUMENTO VARCHAR(45) NOT NULL,
    MARCA VARCHAR(45) NOT NULL,
    NOME VARCHAR(45) NOT NULL,
    VALOR DOUBLE NOT NULL,
    COR VARCHAR(45),
    DESCRICAO VARCHAR(1000),
    CLASSE_CODIGO INT NOT NULL,
    FOREIGN KEY(CLASSE_CODIGO) REFERENCES CLASSE(CODIGO) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela PRODUTO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela PRODUTO');
    });


database(`CREATE TABLE IF NOT EXISTS CARRINHO (
        CODIGO INTEGER PRIMARY KEY,
        CLIENTE_CODIGO INT,
        PRODUTO_CODIGO INT,
        FOREIGN KEY(CLIENTE_CODIGO) REFERENCES CLIENTE(CODIGO),
        FOREIGN KEY(PRODUTO_CODIGO) REFERENCES PRODUTO(CODIGO)
        )`)
    .then(result => {
        console.log('Tabela CARRINHO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela CARRINHO');
    });


// database(`INSERT INTO ENDERECO VALUES 
// (1, 'Olga Erdmann', 'Barra do Rio Cerro', 'Jaragu?? do Sul', 'Santa Catarina'),
// (2, 'Afonso Beijamin Barbie', 'Tifa Martins', 'Jaragu?? do Sul', 'Santa Catarina'),
// (3, 'Albano Piccoli', 'S??o Lu??s', 'Jaragu?? do Sul', 'Santa Catarina'),
// (4, 'Rua das Orqu??deas', 'Jaragu?? 99', 'Jaragu?? do Sul', 'Santa Catarina'),
// (5, 'Jos?? Narloch', 'Tifa Martins', 'Jaragu?? do Sul', 'Santa Catarina')`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela ENDERECO');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela ENDERECO');
//     });


// database(`INSERT INTO PESSOA VALUES 
// ('11111111111', 'Camilly Pessotti', 17, 1),
// ('22222222222', 'Jo??o Meireles', 17, 2),
// ('33333333333', 'Diego Planinscheck', 17, 3),
// ('44444444444', 'Bruna Mafra', 17, 4),
// ('55555555555', 'Leonardo Rafaelli', 17, 5)`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela PESSOA');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela PESSOA');
//     });

// database(`INSERT INTO CLIENTE VALUES 
// (1, 'camillypessotti@gmail.com', 'camillyPessotti', '11111', '11111111111'),
// (2, 'joaomeireles@gmail.com', 'joaoMeireles', '22222', '22222222222'),
// (3, 'diegoplaninscheck@gmail.com', 'diegoPlaninscheck', '33333', '33333333333'),
// (4, 'brunamafra@gmail.com', 'brunaMafra', '44444', '44444444444'),
// (5, 'leonardorafaelli@gmail.com', 'leonardoRafaelli', '55555', '55555555555')`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela CLIENTE');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela CLIENTE');
//     });


// database(`INSERT INTO CLASSE VALUES
// (1, 'Instrumento de corda'),
// (2, 'Instrumento de sopro'),
// (3, 'Instrumento de percuss??o'),
// (4, 'Instrumentos el??tricos')`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela CLASSE');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela CLASSE');
//     });


// database(`INSERT INTO PRODUTO VALUES
// (1, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/405612-0-39248da461f4ebe93915855849874064-1024-1024.jpg', 'Viol??o', 'Takamine', 'GD11MCE Folk', 3058.92, 'Mahogany', 'Com um dos formatos mais cl??ssicos e materiais de qualidade, o Viol??o Folk El??trico Takamine GD11MC Mahogany ?? adequado tanto para profissionais quanto para quem est?? aprendendo, e j?? quer um viol??o de qualidade incontest??vel. O Viol??o Folk El??trico Takamine GD11MC ?? el??trico, tem 6 cordas de a??o, corpo feito de Mahogany, escala de Rosewood e tarraxas cromadas. O som ?? potente e o timbre marcante. O viol??o j?? conta com afinador embutido, para voc?? estar sempre no tom certo e arriscar afina????es diferentes entre as m??sicas.', 1),
// (2, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1121-fff41a307076873ebb15917111458748-1024-1024.jpg', 'Viol??o', 'Strinberg', 'SD200C Folk', 1175.45, 'Tobacco Satin', 'O modelo SD200C ?? um ??timo exemplo do que essa nova s??rie tem a oferecer: atrav??s de sua capta????o SE-50 e suas madeiras de qualidade, o viol??o tem um som limpo e agrad??vel at?? para os ouvidos mais apurados. O modelo SD200C conta com seu corpo em Sapele e tampo em Spruce, oferecendo ao violonista um tom brilhante e com agudos limpos, sem prejudicar os graves naturais provenientes do tampo laminado e das suas cordas de calibre.011. Al??m disso, o modelo SD200C e toda a linha Black Series t??m um apelo est??tico capaz de agradar a todos os gostos!', 1),
// (3, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/418142-0-b47fbf023df1e100ce15855872988803-1024-1024.jpg', 'Cajon', 'Elo', 'EL500', 428.18, 'Preto', 'O Cajon Elo El500 colors - ac??stico ?? fabricado pela marca Cajon Percussion, que visa desenvolver produtos de qualidade dentro da linha de percuss??o. A Linha ELO foi desenvolvida para ser a conex??o perfeita entre voc?? e seu primeiro cajon! Com uma constru????o simplificada e sonoridade surpreendente o Cajon Elo El500 colors - ac??stico leva at?? voc?? a alegria de tocar um instrumento bom, gastando muito pouco.', 3),
// (4, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/131-0d6c52d91522c0218816370975897420-1024-1024.jpg', 'Bateria', 'Michael', 'Legacy DML422', 3976.62, 'Sparkle Marine', 'A Legacy DML422 oferece hardware de excelente qualidade e durabilidade! Possui pedal de bumbo, m??quina de chimbal, estante de caixa, estante reta e estante girafa, itens robustos que proporcionam uma performance musical ainda mais intensa! O Tom Holder traz esfera injetada para ajustes vers??teis dos tons possibilitando mais conforto e ergonomia e o pedal de bumbo com batedor de 4 lados e polia/corrente duplas que permitem uma din??mica diferenciada com os p??s. Vem tamb??m com ferragens extrarresistentes para maior estabilidade, incluindo uma estante reta bastante robusta.', 3),
// (5, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/pro_28414_e1-31db15d4d38861a12515919709576520-1024-1024.jpg', 'Guitarra', 'Strinberg', 'LPS200 Les Paul', 1258.48, 'Vinho', 'A linha LPS200 da Strinberg foi pensada para os guitarristas que procuram por um bom instrumento no estilo Les Paul para estudo ou apresenta????es. O modelo possui 2 captadores do modelo Humbucker que d??o um som mais definido para usar distor????es mais pesadas, e quando usados no som limpo, ou com pouca distor????o, tem um timbre encorpado e limpo. A guitarra Strinberg LPS200 ?? constru??da com corpo em Basswood, bra??o em Maple e escala em Rosewood, o bra??o ?? confort??vel, e de boa tocabilidade.', 4),
// (6, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/418811-0-8480a6348399064f4715855873312836-1024-1024.jpg', 'Contrabaixo', 'Phoenix', 'Top V BS5G', 2010.12, 'Natural', 'O contrabaixo BS-5 TOP V ?? um instrumento que se destaca  pelo lindo corpo em madeira natural e um timbre vers??til. Al??m de sua sonoridade equilibrada este contrabaixo possui  um sistema de equaliza????o ativa para uma equaliza????o ainda mais forte. Oferece corpo em Sapele, Tampo em Rosewood, bra??o em Maple e escala em Rosewood, combina????o de madeiras que garante um belo timbre al??m do visual muito atraente.', 1),
// (7, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/b5081ba43be8fd5f56d173c17a67aab51-1bdb5e13a8ab6b450816347337664735-1024-1024.jpg', 'Contrabaixo', 'Yamaha', 'TRBX174', 1686.84, 'Preto', 'Voc?? precisa confiar no seu instrumento. Yamaha TRBX, timbre e conforto garantidos! A perfeita combina????o entre design moderno, engenharia precisa e a constru????o milenar da Yamaha. A equipe de desenvolvimento de instrumentos da Yamaha criou o instrumento perfeito para m??sicos que n??o querem passar vergonha. Um instrumento com o timbre que voc?? precisa para aperfei??oar sua performance e a flexibilidade para criar e definir seu estilo pr??prio. Um instrumento que oferece conforto total, tocabilidade incr??vel e durabilidade para enfrentar a estrada, show ap??s show, ensaio ap??s ensaio. Timbre, confian??a, conforto e design. Este ?? o TRBX. Este ?? o baixo que voc?? merece!', 1),
// (8, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1101-0c452c17f313db22a116421021296165-1024-1024.jpg', 'Bateria', 'Nagano Onix', 'Smart 22', 2943.91, 'Deep Silver', 'A Onix Smart ?? composta por um Bumbo (22???x16???), uma Caixa (14???x5,5???), um Surdo (16???x16???) e dois Tons (10''x 08'' e 12'' x 09???). Seus cascos s??o confeccionados em Poplar, o material mais tradicional na fabrica????o de baterias, s??o escolhidos especialmente pela baixa densidade, equil??brio sonoro e resposta aos ataques que garantem ao baterista.', 3),
// (9, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-141-8594047e76ae683f1816237647631814-1024-1024.jpg', 'Guitarra', 'Tagima', 'T635 Classic', 1782.66, 'Surf Green', 'A guitarra Tagima T 635, tem corpo em alder, bra??o em maple com escala Technical wood e 22 trastes. A T-635 vem equipada com captadores Tagima single coils, controle de volume, tonalidade e chave seletora de 5 posi????es.', 4),
// (10, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/420736-0-aa3746422ea470bbc715855874235829-1024-1024.jpg', 'Ukulele', 'Phoenix', 'Soprano 21', 297.08, 'Frozen', 'A Phoenix Esta Oferecendo Em Primeira M??o Os Incr??veis Ukuleles Licenciados Disney! S??o 4 Modelos De Ukuleles Com Diferentes Artes Da Disney: Dois Modelos Dos Persaonagens De Frozen (Rosa Ou Azul) E Dois Modelos Coloridos Do Mickey. Estes Ukuleles Foram Criados Para Trazer A Ess??ncia Da Disney Para A Musica E Oferecer Instrumentos Diferenciados E Incr??veis Para Crian??as E Adoradores Da Disney, Conta Ainda Com Rigoroso Controle De Qualidade Na Fabrica????o.', 1),
// (11, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-161-3e7416873ea33f944016382132520813-1024-1024.jpg', 'Trompete', 'Benson', 'BTP1L', 1164.52, 'Ouro', 'O Trompete em Bb BTP-1L Benson laqueado e encaixe das pompas em alpaca, campana de 125mm, pistos em a??o inoxid??vel, dedeira na 1?? pompa, anel fixo na 3?? pompa, curva da 3?? pompa remov??vel, possui sonoridade diferenciada, valorizando cada nota em qualquer estilo musical. Proje????o sonora de excelente qualidade e defini????o surpreendente at?? mesmo para trompetistas mais exigentes, acompanhando case resistente e de ??tima durabilidade de uso indispens??vel para proteger o instrumento, possui tamb??m 1 bocal de excelente qualidade.', 2),
// (12, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/417830-0-86df38a95dc51acfbd15855872715663-1024-1024.jpg', 'Cajon', 'Ol??', 'OL110', 262.12, 'Dark Blue', 'O C??jon profissional OL110 da Ol?? ?? o melhor custo beneficio do Brasil. Direto da F??brica para seu lar. Vers??til para todos os tipos de m??sica, nossos C??jons garante ??tima performance, seja para tocar em casa, shows, ensaios, igrejas e rodas de Samba ou de viol??o. Este Caj??n possui formato inclinado em 15 graus, em MDF 9mm. Seu tampo flex??vel garante uma tocada com simetria.', 3),
// (13, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/sem-titulo-131-aab8bc8b7ec4eabc3e16490904296261-1024-1024.jpg', 'Ukulele', 'Stagg', 'Soprano US', 253.38, 'Ocean', '- Tampo: Basswood\n- Fundo e Laterais: Basswood\n- Neck: Nato\n- Headstock: Nato\n- Ponte: Composite walnut\n- Tarraxas: Cl??ssica com puxadores de pl??stico\n- Acompanha: Bag', 1),
// (14, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1511-f2731a4adfcddcc1ed16196308853423-1024-1024.jpg', 'Piano', 'Casio', 'Celviano AP470 WE', 8958.42, 'Branco', 'Os recursos do nov??ssimo Sistema de som multidimensional Morphing AiR*da CASIO refletem toda a aten????o aos detalhes na express??o de timbres valiosos e ressonantes inerentes ao piano. A capacidade de mem??ria instalada foi expandida para atingir maior dura????o das amostras e muito mais qualidade dos dados de waveform. As mudan??as temporais de timbre que geram um som que se espera ouvir apenas de um piano, a come??ar pelo som inicial, seguindo por uma bela extens??o at?? que o som levemente se esvaia, s??o naturalmente reproduzidas.\nAiR = Acoustic and Intelligent Resonator\nSele????o entre dois sons de piano de cauda lend??rios\nOs sons instalados de dois pianos de cauda mundialmente renomados s??o separadamente selecion??veis, dependendo do g??nero da m??sica que est?? sendo tocada e do ambiente de desempenho.', 1),
// (15, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/396778-0-b060d407c4f7bf5b7c15855843437368-1024-1024.jpg', 'Gaita', 'Hering', ' 6020D', 197.44, 'Blac Blues', 'A Gaita Diat??nica Hering Black Blues 6020 possui corpo em ABS injet??vel, e seus parafusos de fixa????o proporcionam maior veda????o e leveza ao tocar o instrumento.. Esta gaita oferece capa de prote????o metalizada na cor preta, e possui chapa de vozes de 1,07 mm de espessura com afina????o justa, permitindo melhor proje????o de solos musicais sem prejudicar a execu????o de acordes.. Acompanha estojo em pl??stico personalizado e manual de instru????es.. As gaitas Hering oferecem ??tima qualidade, constru????o, e tamb??m um custo beneficio excelente. A marca pensou tanto nos iniciantes no instrumento ou curiosos em aprender, quanto tamb??m para uso profissional.. A Hering fabrica diversos modelos de harm??nicas diat??nicas em todas as afina????es do modo maior.', 2),
// (16, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1231-bb217a40aa5b0ec11416040612332370-640-0.jpg', 'Teclado', 'Yamaha', 'PSR E373', 2080.04, 'Preto', ' novo padr??o dos teclados port??teis.\nEquipado com teclas sensitivas e um nov??ssimo gerador de timbres LSI que oferece uma sensacional variedade de Sons de alta qualidade, o PSR-E373 ?? o novo teclado port??til da Yamaha, perfeito para aprender e tocar.\nUma extensa biblioteca de sons de alta qualidade\nO PSR-E373 vem com o rec??m-desenvolvido gerador de timbres LSI, que traz impressionantes melhorias na qualidade do som, bem como efeitos de alta qualidade. Gra??as ao novo LSI, voc?? tem uma biblioteca abrangente de 622 sons de instrumentos perfeitos para tocar em qualquer g??nero, bem como os Sons Super Articulation Lite exclusivos, que reproduzem os trinados e o ru??do dos instrumentos de corda, como violoncelo e bandolim??? algo complicado de emular - com total realismo, para apresenta????es extremamente aut??nticas.', 4),
// (17, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/383270-0-2c10df45f4304b211e15855842637993-1024-1024.jpg', 'Saxofone', 'Eagle', 'SA500BG', 6808.38, 'Ouro/Preto', 'O modelo SA 500 BG se destaca pela qualidade de sua constru????o e pelos materiais que o comp??e. Ajustadas manualmente, as chaves ergon??micas oferecem maior conforto, respostas r??pidas e afina????o precisa. O acabamento laqueado lhe confere uma sonoridade mais encorpada, aumentando sua performance.', 2),
// (18, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/377766-0-b8f9eb53597ae12ee315855842578131-1024-1024.jpg', 'Saxofone', 'Eagle', 'SA500VG', 5567.30, 'Ouro Fosco', 'O modelo SA 500 VG Vintage se destaca pela qualidade de sua constru????o e pelos materiais que o comp??e. Ajustadas manualmente, as chaves ergon??micas oferecem maior conforto, respostas r??pidas e afina????o precisa. O acabamento laqueado lhe confere uma sonoridade mais encorpada, aumentando sua performance.', 2),
// (19, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/409182-0-ee31db87cf124dc1e515855850149725-1024-1024.jpg', 'Clarinete', 'Hoyden', 'HCL25F', 1021.18, 'Preto', 'HCL-25F, afina????o Bb (Sib), 17 chaves niquelada, corpo em ABS, acabamento do corpo fosco, acompanha grease, flanela microfibra, chave de fenda, boquilha e estojo luxo. Detalhe: Parafuso a??o inoxid??vel e apoio do polegar direito regul??vel.\n\nESPECIFICA????O T??CNICA\n\n- Afina????o: Bb (Sib) 17 chaves niquelada.\n- Corpo: ABS.\n- Acabamento do corpo: Fosco.\n- Acompanha: Grease,boquilha e estojo luxo.\n- Detalhe: Parafuso a??o inoxid??vel e apoio do polegar direito regul??vel.', 2),
// (20,'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/396953-0-43804ec12abcbac4e115855843502233-1024-1024.jpg', 'Tuba', 'Hoyden', 'HTB25L', 11361.92, 'Ouro', 'Modelo: HTB-25L-4, tuba 4/4 4 pistos, afina????o Bb (sib), acabamento laqueado, calibre 16,5mm campana 381mm, acompanha estojo luxo e bocal. Detalhe: Bot??es em metal, porta lira e dedeira na primeira pompa. Altura 890mm.', 2)`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela PRODUTO');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela PRODUTO');
//     });