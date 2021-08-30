--user
--insert into usuario (nome, cpf, email, senha) values ('Ryan', '123.123.123-00', 'ryancamaargo@hotmail.com', '123456');
--categoria
insert into categoria (nome) values ('filmes');
insert into categoria (nome) values ('series');
--itens
insert into itens (nome, descricao, sinopse, imagem, preco, preco_promocao, categoria_id) values ('Mulher Maravilha','Mulher-Maravilha é uma personagem fictícia de histórias em quadrinhos publicadas pela editora estadunidense DC Comics','Mulher Maravilha conta a história de Diana Prince (Gal Gadot), uma guerreira poderosa que precisa ajudar o piloto Steve Trevor (Chris Pine) a vencer uma terrível guerra. Ao entrar no conflito, ela percebe o seu verdadeiro papel no mundo.', 'mulhermaravilha', 200.00, 150.00, 1);
insert into itens (nome, descricao, sinopse, imagem, preco, preco_promocao, categoria_id) values ('Coringa','Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô','solado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô', 'coringa', 100.00, 80.00, 1);
insert into itens (nome, descricao, sinopse, imagem, preco, preco_promocao, categoria_id) values ('Vingadores Ultimato','Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos.','Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.', 'vingadores', 100.00, 50.00, 1);
insert into itens (nome, descricao, sinopse, imagem, preco, preco_promocao, categoria_id) values ('Star Wars','Wars...','Sinopse', 'starwars', 440.00, 380.00, 1);


insert into itens (nome, descricao, sinopse, imagem, preco, preco_promocao, categoria_id) values ('Vikings','Mulher-Maravilha é uma personagem fictícia de histórias em quadrinhos publicadas pela editora estadunidense DC Comics','Sinopse', 'vikings', 225.00, 200.00, 2);
insert into itens (nome, descricao, sinopse, imagem, preco, preco_promocao, categoria_id) values ('Peaky Blinders','Mulher-Maravilha é uma personagem fictícia de histórias em quadrinhos publicadas pela editora estadunidense DC Comics','Sinopse', 'peakyblinders', 130.00, 80.00, 2);
insert into itens (nome, descricao, sinopse, imagem, preco, preco_promocao, categoria_id) values ('The last Kingtom','Mulher-Maravilha é uma personagem fictícia de histórias em quadrinhos publicadas pela editora estadunidense DC Comics','Sinopse', 'thelastkingdom', 140.00, 110.00, 2);
insert into itens (nome, descricao, sinopse, imagem, preco, preco_promocao, categoria_id) values ('Stranger things','Mulher-Maravilha é uma personagem fictícia de histórias em quadrinhos publicadas pela editora estadunidense DC Comics','Sinopse', 'strangerthings', 300.00, 240.00, 2);




-- admin 123
INSERT INTO permissao (nome) values('ROLE_ADMIN');
INSERT INTO permissao (nome) values('ROLE_USER');

INSERT INTO usuario(nome, username, password, email, bairro, cep, cidade, cpfcnpj, numero, rua, tel, uf) VALUES ('Administrador', 'admin','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem', 'ryancamaargo@hotmail.com', 'Centro', '85501061', 'Pato Branco', '50435178855', '63', 'Parana', '15998429504', 'PR');
--INSERT INTO usuario(nome, username, password, email) VALUES ('Teste', 'teste','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');

INSERT INTO usuario_permissoes(usuario_id, permissoes_id) VALUES (1, 1);
--INSERT INTO usuario_permissoes(usuario_id, permissoes_id) VALUES (1, 2);
--INSERT INTO usuario_permissoes(usuario_id, permissoes_id) VALUES (2, 2);
--
-- INSERT INTO usuario(nome, username, password, email, bairro, cep, cidade, cpfcnpj, numero, rua, tel, uf) VALUES
-- ('Ryan', 'ryan','123', 'ryancamaargo@hotmail.com', 'Centro', '85501061', 'Pato Branco', '50435178855', '63', 'Parana', '15998429504', 'PR');