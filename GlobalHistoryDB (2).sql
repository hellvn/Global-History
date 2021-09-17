USE tempdb
GO
IF EXISTS (SELECT*FROM sys.databases WHERE name =  'GlobalHistory')
DROP DATABASE GlobalHistory
GO

CREATE DATABASE GlobalHistory
GO

USE GlobalHistory
GO
CREATE TABLE users(
user_id		INT IDENTITY NOT NULL,
email		VARCHAR(255) NOT NULL,
password	VARCHAR(255), 
created_at	TIMESTAMP

CONSTRAINT PK_users		PRIMARY KEY(user_id)
);
GO

CREATE TABLE category(
 cat_name	NVARCHAR(50) NOT NULL,
 created_at TIMESTAMP

 CONSTRAINT PK_category PRIMARY KEY(cat_name)
 );
 GO

CREATE TABLE posts(
post_id			INT IDENTITY NOT NULL,
user_id			INT NOT NULL,
post_title		NVARCHAR(255) NOT NULL,
post_image		VARCHAR(255) NOT NULL,
post_published	BIT DEFAULT 0,
description		NVARCHAR(MAX),
created_at		TIMESTAMP

CONSTRAINT PK_post			PRIMARY KEY(post_id),
CONSTRAINT FK_post_users	FOREIGN KEY (user_id)	REFERENCES users(user_id),
);
GO

CREATE TABLE post_cat(
post_id		INT NOT NULL,
cat_name	NVARCHAR(50) NOT NULL,

CONSTRAINt PK_post_cat		PRIMARY KEY(post_id, cat_name),
CONSTRAINT FK_post_cat		FOREIGN KEY (post_id)	REFERENCES posts(post_id),
CONSTRAINT FK_cat_post		FOREIGN KEY (cat_name)	REFERENCES category(cat_name)

);

CREATE TABLE comment(
comment_id		INT IDENTITY NOT NULL,
user_id			INT NOT NULL,
post_id			INT NOT NULL,
comment			NVARCHAR(MAX),
created_at		TIMESTAMP

CONSTRAINT PK_comment		PRIMARY KEY(comment_id),
CONSTRAINT FK_comment_users FOREIGN KEY (user_id)	REFERENCES users(user_id),
CONSTRAINT FK_comment_post	FOREIGN KEY (post_id)	REFERENCES posts(post_id)
);
GO

CREATE TABLE tags(
tag_id		INT IDENTITY NOT NULL,
tag_name	NVARCHAR(50) NOT NULL,
created_at	TIMESTAMP

CONSTRAINT PK_tag	PRIMARY KEY(tag_id),
);

CREATE TABLE post_tag(
post_id INT NOT NULL,
tag_id INT NOT NULL,
created_at	TIMESTAMP

CONSTRAINT PK_post_tag	PRIMARY KEY(post_id, tag_id),
CONSTRAINT FK_pt_post	FOREIGN KEY(post_id)	REFERENCES posts(post_id),
CONSTRAINT FK_pt_tag	FOREIGN KEY(tag_id)		REFERENCES tags(tag_id)
);

INSERT INTO category VALUES
('Ancient', null),
('Medieval', null),
('Early', null),
('Modern', null),
('Character', null)
GO

INSERT INTO users VALUES
('Paschalis@gmail.com','123@456', null),
('Dumitru@gmail.com','123@456', null),
('Phoebus@gmail.com','123@456', null),
('Crescens@gmail.com','123@456', null),
('Ittai@gmail.com','123@456', null),
('Thorezan@gmail.com','123@456', null),
('Jenaro@gmail.com','123@456', null),
('Euaristos@gmail.com','123@456', null)
GO

INSERT INTO posts(user_id,post_title,post_image, post_published,description) VALUES
(5,'Virtue, terror, muddle','https://www.the-tls.co.uk/wp-content/uploads/sites/7/2021/09/AssetAccess1-2.jpg',0,'In real revolutions, things happen over-night. That this is what distinguishes a revolution from slower processes (such as evolution or reform) may seem obvious today, but the vocabulary has not always been so clear. Rather, revolution’s association with immediacy was born of the French Revolution. Before then, “revolution” in the singular was chiefly used to describe a cycle such as the Earth’s movement around the Sun, while “revolutions” meant a series of disruptive and chaotic, but unrelated, events (a useful term to have to hand, should a pandemic, climate change, Brexit and Trumpism ever chance to coincide). The protagonists of 1789, however, thought in terms of decisive days and individuals identified with them. Hauled before police agents for questioning in 1793 or 1794, suspected counter-revolutionaries were asked where they had been, and what they had done, on a series of specific dates going back four or even five years: July 14, 1789, October 5–6, 1789, August 10, 1792, May 31 and June 2, 1793 – the journées of Parisian popular action that made the French Revolution and made France, eventually, into a Republic.'),
(2,'Queen of hearts', 'https://www.the-tls.co.uk/wp-content/uploads/sites/7/2021/08/AssetAccess62.jpg', 1,'On July 10 – July 4 might have been more fitting – in the presence of a cheering crowd, the City of Charlottesville brought down the monumental equestrian statues of the Confederate generals Robert E. Lee and Thomas “Stonewall” Jackson that had stood for a hundred years in the centre of the city. The event made national and international news, for good reason. The statues had been the focal point of the “Unite the Right” rally staged by white supremacists on August 12, 2017, which had led to the death of a young woman protester and an intense debate about the legacy of slavery in Charlottesville, the University of Virginia, and elsewhere in America (see my article, “Mr Jefferson’s University”, TLS September 22, 2017). Even President Biden felt driven to comment approvingly on the removal.'),
(6,'Ideas made us', 'https://www.the-tls.co.uk/wp-content/uploads/sites/7/2021/08/AssetAccess17.jpg', 0,'Every popular historian knows the dilemma. The narrative is flowing. Kings, generals, battles, dates dance onwards in glorious parade. But when to pause and reflect on history’s underlying drivers, its geographies, ideologies, beliefs, technologies? Events suddenly seem symptoms of deeper causes, but how to marry them to the story? The twentieth-century French historian Fernand Braudel championed this power of time over history, what he called the longue durée. The gulf between events, he argued, was as potent a force of history as the events themselves. Michael Braddick is a true Braudelian. He is a historian not of who, what and when, but of how and why. From Stonehenge to Brexit and Danegeld to coronavirus, his concern is for the setting of history, its intellectual and physical environment, and in “the capacity of British people to use political power to get things done”.'),
(2,'Hall of mirrors','https://www.the-tls.co.uk/wp-content/uploads/sites/7/2021/07/AssetAccess82.jpg', 1,'In Poland, the word “Katyn” has two powerful associations. The first is with a crime; the second is with a lie about that crime. The crime in question is the mass shooting of almost 22,000 Polish service personnel at sites across the Soviet Union, including the Katyn forest in western Russia, by the NKVD in 1940. The murders were carried out in a matter of weeks. The lie – the Soviet claim that the killings had in fact been carried out by the Germans in 1941 – lasted half a century and was maintained through a combination of diplomatic pressure, fake investigations, deceitful monuments, destroyed documents, intimidation and murder. While Russia reluctantly admitted the truth in the early 1990s, aspects of the crime remain unclear and the facts are increasingly subject to revision under Vladimir Putin’s reactionary memory politics.'),
(7,'Margins of the Holocaust','https://www.the-tls.co.uk/wp-content/uploads/sites/7/2021/07/AssetAccess91.jpg', 1, 'Few issues raise the temperature of debate in Poland like collaboration in the Holocaust. In a country scarred by the Second World War – during which it lost over 5 million citizens, half of them Jewish – the memory of victimhood and resistance continues to frame collective identity. Yet a growing body of research on the complicity of a minority of Poles in German crimes has complicated this narrative, provoking a furious political response. Poland’s government and its right-wing allies are on a mission to defend the nation’s “good name” from what they see as historical “slander”. In 2018, the ruling coalition tried to criminalize the attribution of wartime crimes to the Polish nation “against the facts”, eventually backing down after protests from Israel and pressure from the United States. Meanwhile, politicized state institutions, including public media and the Institute of National Remembrance, have led a noisy campaign to discredit the work of scholars investigating cases of collaboration.')
GO

INSERT INTO post_cat VALUES 
(1,'Ancient'),
(2,'Medieval'),
(3,'Early'),
(4,'Modern'),
(5,'Character');

