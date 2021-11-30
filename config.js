var config = {
    style: 'mapbox://styles/rorynealon/ckk6caqcq0kdc17qxgsigtgss',
    accessToken:'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJQSkZ2NU9nIn0.8i2jsHIQQBU4lDdv3emAbQ',
    showMarkers: false,
    //alignment: 'left',
    theme: 'light',
    title: 'Patrie Cleary',
    subtitle: 'Purple Patch: place of success or good luck',
    byline: 'By: Chrystal Rie',
    footer: 'Crystal Rie',
    chapters: [
        {
            id: 's1',
            //title: '',
            //image: '',
            //audio: '',
            //description: '',
            //transcript: '',
            location: {
                center: [140.23839, 5.85966],
                zoom: 1.85,
		        pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
		    {
	               layer: 'pp-route',
		           opacity: .8
		    }
	    ],
            onChapterExit: [
                    {
                       layer: 'pp-route',
                       opacity: 0
                    }
            ]
        },
        {
            id: 's2',
            alignment:'center',
            title: 'What does it mean to have Filipino cuisine represented in the nation\'s capital?',
            image: './images/Slide_02.jpg',
            audio: './audio/DCOHC_PurplePatch_Slide_02.mp3',
            //description: '<span class="quote">What does it mean to have Filipino culinary representation in the nation’s capital? <br><br> How do you represent Filipino culinary identity when there is no representation in the nation’s capital?</span>',
            transcript: 'I can\'t say this enough, introducing Filipino cuisine to the nation\'s capital when it had no representation before is a huge, huge undertaking. You\'re getting questioned by so many people. One, you\'re getting questioned by the general population of what is Filipino cuisine? Then you\'re getting questioned by the population of Filipinos that know exactly what it is, and why are you making it that way? Then you\'re getting questioned by the people that have had Filipino food before, aren\'t experts on it, but want to tell you all about what they had when they were in the Philippines, or how their friend made it. There\'s people coming at you from different angles. Then the last angle is the reviewers. People that are coming in that may or may never had Filipino cuisine, but now they\'re questioning what you\'re doing. They\'re critiquing what you\'re doing, and now they\'re writing about it, and everybody believes what they read. You\'ve got them coming from everywhere, but these are your customers, and so how are you going to deal with these customers? I tell you, for me, it\'s being authentic and true to yourself.',
            chapterType: 'wide',
            location: {
		center: [140.23839, 5.85966],    
                zoom:1.85,
	        pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 's3',
        alignment: 'left',
        title: 'Philippines: The Beginning of Patrice\'s Story',
        image: './images/Slide_03.jpeg',
        audio: './audio/DCOHC_PurplePatch_Slide_03.mp3',
        description: 'Patrice Cleary was born in Zambales, Philippines, to an American father, George Frederick Hammond Jr., and Filipino mother, Nemesia Bobis Hammond. Before Cleary turned one year old, her family moved to her father\'s hometown of Westwood, Massachusetts.',
            transcript: 'I was born in the Philippines, in Zambales, which is a province in Olongapo. My father was in the military, so it\'s actually a location right outside of Subic Bay. We left the Philippines when I was less than a year old. So, I don\'t really have memories of the Philippines per se as living there as a child, only through my mother describing my hometown. My first memory of a hometown would be Massachusetts, where my father is from. He was from a town right outside of Boston called Westwood, Massachusetts, a very suburban-type neighborhood. Small white America basically, there weren\'t any Asians around.',
	    location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: 'boatTrip',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: 'boatTrip',
                    opacity: 0
                }
            ]
        },
        {
            id: 's4',
            title: 'Growing Up As A Multiracial Child in Greater Boston', 
            image: './images/Slide_04.jpeg',
            audio:'./audio/DCHOC_PruplePatch_Slide_04.mp3',
            description: 'For young Patrice, it was challenging to navigate through her multi-racial and cultural identities in Westwood, a predominantly white neighborhood. Both of her parents took pride in their families\' native heritages. Her father\'s family cherished some of the Irish customs while embracing American lifestyles in Boston. On the other hand, her immigrant mother preserved her background through cooking Filipino food.',
            transcript: 'It was definitely like we were pulled in different directions. One direction is my mom holding on to her identity, and that was through food, and teaching us about Filipino food, and cooking Filipino food. And then, there was this other side, whereas my father\'s side, where it\'s an American Irish family. I think because my grandfather\'s Irish, my grandmother was Irish, and obviously my father and my aunt and uncle they\'re basically first generation here in America. So, they\'re wanting to hold onto their identity in a different way as well, but definitely acclimating themselves to the American way of life and the traditions of being an American.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 's5',
            title: 'What\'s Filipino stays in the home',
            //image: '',
            audio: './audio/DCOHC_PurplePatch_Slide_05.mp3',
            description: '<span class="quote">What\'s Filipino stays in the home. <br><br> Patrice\'s mother, Nemesia, cooked Filipino food at home as a way to maintain her cultural identity in America. In particular, Patrice has fond memories of getting a scoop of Bagoóng (shrimp paste) out of a jar in the refrigerator as a snack. Even though the family ate Filipino food on a regular basis at home, Nemesia was cautious of packing Filipino food for her children\'s school lunches. She was concerned that bringing Filipino food to school would make her children feel “different” or “un-American” to their classmates. Given her own experiences with microaggressions, she wanted her children to feel included.',
            transcript: 'We were definitely raised as, “What\'s Filipino stays in the home,” other than things that were kind of Americanized. We had Filipino things, food that we ate in the house, that we kept in the refrigerator. For instance, my mom had this pork that she fried with Bagoóng. Bagoóng is a shrimp paste. In different cultures, Asian cultures have shrimp paste. But it\'s fried with shrimp paste, tomatoes, and onions. And then, she would store it in these glass jars in the refrigerator. As a child, whenever you wanted a snack, you would just go in there and take a scoop of that out, and you\'d mix it with rice that was hot, because you always had a hot rice cooker there at all times. That\'s the true mark of an Asian; you had a rice cooker and you had a rice dispenser. That\'s definitely something that we eat in our house but we would never take outside of our home.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 's6',
            title: 'Hiya: Shame Over Your Own Food',
            image: './images/Slide_06.jpeg',
            audio: './audio/DCOHC_PurplePatch_Slide_06.mp3',
            description: 'Patrice remembers the moment she understood the meaning of hiya, which means a sense of shame in Tagalog. One day, her father came home and was put off by the Filipino fried fish smell from her mother\'s home cooking. Witnessing her American father\'s negative reaction to Filipino food shocked young Patrice and led her to feel self-conscious about her Filipino identity as well.',
            transcript: 'My father would walk into the house after my mom would be making fried fish. the smell of the fried fish would be so off putting to him. Because I remember him saying, “Oh, I\'m leaving. Call me when you\'re done cooking!” I probably wasn\'t more than five or six years old, so hearing that from your own parent... How do you think that translates into how other people could potentially see or feel about your food? You feel ashamed. It\'s called hiya. It\'s a shame inside that is built inside of you. I don\'t want other people to smell my food. Oh my god, air out the house, does it smell like fish? Does your hair smell? As a little Asian girl, you don\'t want to smell like fish. You don\'t. It\'s embarrassing. And why? Why did we feel that way?',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
         id: 's7',
         title: 'Patrice: A Self-made Name',
         //image: '',
         audio: './audio/DCOHC_PurplePatch_Slide_07.mp3',
         description: 'As young Patrice rediscovered her identity, she started to question whether her two names fit how she saw herself. Her legal name, Patricia, came from an aunt she was named after; and her other name, Patis, was a nickname her mother used to call her. Patis is a fish sauce brand name that sounded similar to Patricia. Though these names displayed her multicultural identities, she did not want to be categorized as either American or Filipino -- she did not feel like she fit into either of the categories. As a result, she created her own identity by claiming her self-conceived name, Patrice. <br><br><span class="quote">I didn\'t want to be American at that moment, I didn\'t want to be Filipino. I wanted to be in the other category. And the other category is Patrice. So it\'s a made up name that I have kept my whole life.</span>',
            transcript: 'I\'m named after two Aunts. Patricia is my father\'s sister and "Caling" is my mother\'s sister\'s name. But my mom used to always call me Patis growing up. And she would always say, "Patis, Patis, Patis." Well, nobody knew what Patis was. Only Filipinos know what Patis is. So when I got older, my sister and I got into this terrible argument and she said to me, "I\'m going to tell everybody at school what your name means." And it was like, "Oh, don\'t tell everybody." Patis is a famous fish sauce in the Philippines. It\'s the brand that I still use today. I only use Patis fish sauce. And so from that day on, I put Patricia and Patis together and got Patrice. I took a stand, I think I was 12 years old and I said, "I am no longer being called Patricia or Patis, it is Patrice. Because I didn\'t want to identify with either one. I didn\'t want to be American at that moment, I didn\'t want to be Filipino. I wanted to be the other category. And the other category is Patrice.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
	{
	    id: 's8',
        title: 'Rolling Lumpias: A Lesson of Being an Entrepreneur',
        image: './images/Slide_08.jpeg',
        audio: './audio/DCOHC_PurplePatch_Slide_08.mp3',
        description: '<span class="quote">At a very young age, I was taught how to be an entrepreneur from my mom. You know, the night before we\'d set up, cutting the meat and marinating everything and then skewering them on the barbecue skewers, rolling all the lumpia. Then my mom would always get orders for lumpia and I remember she got an order for 5,000 pieces of lumpia one time.</span><br><br>Even at a young age, Patrice supported her mother\'s catering business by rolling lumpias and skewering meats. While her father worked as an aviation electronics technician in the military, her mother catered for the non-commissioned officer\'s club three days a week. Some of the popular dishes include pancit, barbeque meat, and lumpia. It was Patrice\'s regular routine to prepare food with her mother to help the family. She even recalled one instance where her siblings rolled 5,000 lumpias for a couple of days. Even though they were children, her mother did not compromise the quality of the lumpias and taught them the importance of consistency and precision.',
        transcript: 'At a very young age I was taught how to be an entrepreneur from my mom. You know, the night before we\'d set up, cutting the meat and marinating everything and then skewering them on the barbecue skewers, rolling all the lumpia. Then my mom would always get orders for lumpia. I remember she got an order for 5,000 pieces of lumpia one time. And it was on a Thursday, she got the order for Saturday, and I remember running away and hiding and my mom would say, "halikana dito!" That means get your butt here now. But we\'d have to help her make this lumpia. As a child I don\'t remember really enjoying childhood like regular children do. Our job was to help the family. Our job was to help my mom. If my mom had a lumpia order, we were sitting at the table rolling lumpia like a little factory with her. She can\'t do it all on her own, and she taught us as kids, "okay, come on, this is for you. This is for you. This is for you." And we were just like, one of us was peeling the lumpia wrappers. Another one of us was rolling, another one of us was cutting and then maybe a friend was over and she would put the lumpia in little plastic saran wraps. Rolls of 25. And the lumpia had to be perfect. Not too skinny, not too thick. You don\'t waste money, you\'re here to make money. So it was the right proportion. If you put too much meat in it, she would definitely unwrap those rappers and redo it. She was like the lumpia Nazi.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
	    id: 's9',
            title: 'US Marine Corps: Developing a Strong Work Ethics',
            image: './images/Slide_09.jpeg',
            audio: './audio/DCOHC_PurplePatch_Slide_09.mp3',
            description: '<span class="quote">Where you start off today doesn\'t define who you are tomorrow, and you shouldn\'t allow that to define who you are.</span><br><br>After her father unexpectedly passed away, Patrice joined the Marine Corps at eighteen to support her mother and brother. As a child, Patrice often heard her father —  who had served in the Marines and Navy for 10 years, respectively —  classify branches of the armed forces according to various tropes. “The Air Force,” she recalled him saying, “they just sit on their butts all day and they\'re flyboys.” The Marines, in her father\'s eyes, were the true war heroes. And even though Patrice joined the Marines out of necessity (and as a way to follow in her father\'s footsteps), she used the opportunity to develop her own skills through the work ethic military life provides. Beginning her career as a truck driver, Patrice gradually advanced to managerial roles that would hone the leadership skills vital to running her own restaurant.',
            transcript: 'Because you [I] went open contract, you [I] signed up for whatever job is available when you graduate. When I graduated, there were three jobs available. There was a cook, which I didn\'t want to be a cook. I did not. I mean I\'ve been cooking all my life with my mom, I did not want to. In boot camp we had to do Mess and Maintenance week where you either do maintenance work out in the compounds of Parris Island, or you did mess week where you did it in a food hall. And I did it and I was scullery. Scullery means you\'re washing dishes. So all I could think is; if I\'m a cook, I\'m going to be scullery and I\'m just going to be washing dishes my whole life. I\'m not washing dishes. So the other thing was admin. I didn\'t want to be admin. I didn\'t want to be stuck in an office. I was like, I\'ll be a truck driver. <br><br>…<br><br> Where you start off today doesn\'t define who you are tomorrow, and you shouldn\'t allow that to define who you are. I joined the Marine Corps, I learned about leadership skills, I learned about delegation of duties. After the Marine Corps, I worked for a venture capital firm where I learned about finance. Here I am, a successful restaurateur. You start connecting those dots, that leads me to my title of a successful restaurateur.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 's10',
            title: 'Mount Pleasant: The Time Before Purple Patch',
            image: './images/Slide_10.jpeg',
            audio: './audio/DCOHC_PurplePatch_Slide_10.mp3',
            description: 'After her military service, Patrice helped her friends open a restaurant, Tonic, in Washington DC\'s Mount Pleasant neighborhood. What Patrice imagined as a short-term project would morph into an almost decade-long enterprise. After Tonic opened, Patrice continued to work as a bartender, and would go on to become a company business partner. But after eight years, she left Tonic to rechannel her energy to her family, and became, as a result, a stay-at-home mom. When the opportunity arose for Patrice to take over Tonic, however, it did not take her long to start reimagining Tonic as her own restaurant, given her strong attachments to Mount Pleasant.',
            transcript: 'I helped two of my really good friends open up a restaurant here called Tonic, back in 2003. And I thought I was only going to be with them for a few months to help them. But six months turned into many years later. I stayed with them for almost 10 years and in 2011, I told them that it wasn\'t for me anymore. I decided to be a stay at home mom and not work anymore, but work for our family, so I left them. I am brought back to Mount Pleasant because in 2014, the owners, my friends, decided not to renew their lease. I had already broken off partnership with them when I left in 2011. They decided not to renew the lease and the owner of the building, Greg Nicholas, came to me and asked me if I\'d be interested in opening up a Filipino restaurant, or a restaurant, in the restaurant that was there. I said, “no” originally, but I looked at this space and it was nostalgia. I knew that space better than anyone else and I absolutely love Mount Pleasant. This is such a unique neighborhood in Washington DC, it\'s one of those neighborhoods that makes you feel a part of it, and makes you feel a part of the community. You still feel like you\'re in the city, but you\'re not living in the city, necessarily. And I felt the connection, I felt like if I could be successful anywhere, I could definitely be successful here. So that\'s why I chose Mount Pleasant and I honestly attribute a lot of my success to coming back to Mount Pleasant, because I would often say to people that I feel like I could be mayor of Mount Pleasant.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 's11',
            title: 'Purple Patch: Filipino Culinary Representation in Washington, DC',
            image: './images/Slide_11.jpeg',
            audio: './audio/DCOHC_PurplePatch_Slide_04.mp3',
            description: 'What seemed to be a straightforward task of opening a Filipino restaurant led Patrice to tackle deeper questions on the identity and authenticity of Filipino cuisine in the US. How do you accurately represent Filipino cuisine when it encompasses so many disparate geographies, ethnicities, and historic influences? Patrice soon realized Purple Patch could not showcase the complete mosaic of Filipino cuisine. What it could do, however, was serve the Filipino food that Patrice knew the best: the version that her Filipino mother cooked for her family in the US. ',
            transcript: 'What is Filipino cuisine? Filipino cuisine is a culmination of flavors. We\'re a cross between Chinese, Spanish, and Malay, and anybody else in between has tried to colonize us. So if you had to describe it, how would you describe it? And if you can\'t properly describe it, how do you put it on a menu? How do you properly represent that? <br><br>Here we are, a group of us that have Filipino mothers, fathers, aunts, uncles, lolas that taught us how to cook, and we are considered home cooks. We may have honed our skills in American kitchens or other kitchens across the US, not cooking Filipino cuisine. We really enjoy our food and we have these skills. If we don\'t open up a restaurant, who\'s going to do it? Because it\'s not going to be the next generation, because the next generation isn\'t going to be taught first-hand like we were taught. we are empowered with all this knowledge. It\'s art. What we do is art. I can close my eyes and I can tell you the smell, the taste, how to cook. I can tell you the ingredients, everything in it. Just like an artist paints a picture.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 's12',
            title: 'Sizzling Sisig: Elevating Filipino Cuisine in America',
            image: './images/Slide_12.jpg',
            audio: './audio/DCOHC_PurplePatch_Slide_04.mp3',
            description: 'The sizzling sisig at Purple Patch is an example of Patrice\'s own interpretation of a Filipino dish. Sisig is a Kapampangan word that means to snack on something sour, and the dish sisig usually refers to chopped pork stir fried with onion, chili peppers, and citrus juice. Many people make Sisig with pig\'s head meat, such as ears, snout, and jaws —  parts that would have otherwise been thrown away. But Patrice reinvented sisig by using pork belly and shoulder, eschewing headmeat altogether so that the dish could become more flavorful.',
            transcript: 'Sisig, growing up, was everything that the Americans didn\'t want from the pig. That meant the head, basically. The Americans could use every part of the pig but the head, and they would throw these heads out. And the Filipinos were like, \'give us the head, we can make something out of it.\' And they did. They would take the ears, the snout and the jaw. They would chop it up into little pieces, and they would make sisig. Sisig just means to snack on something sour. They would make this sizzling sisig, and it was really just like a bar snack. But it\'s all gristle and crunchy, and the head… Opening up my restaurant, I could\'ve done that. But I wanted to make it a cleaner version. Does that make it any less sisig? Maybe for the purists, it does. But for me, it has all the same flavor, but just using different parts of the pig. If you were to go to another restaurant, they\'re going to use different parts. They\'re going to use the liver, they\'re going to use the ears, the jowl, if it\'s a traditional sisig. My sisig is my sisig that I own. I don\'t use the head. I\'m trying to elevate our cuisine. Still trying to maintain the integrity of it, but just trying to elevate it a little bit. And not have it as just a bar snack, but let\'s have it as an actual meal. And how do we have this as a meal? We have to add substance to it. So, it\'s not just fat, fat, fat. Let\'s add some meat to it.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
                {
            id: 's13',
            title: 'Preserving Filipino Culinary Heritage in the District',
            image: './images/Slide_13.jpg',
            audio: './audio/DCOHC_PurplePatch_Slide_04.mp3',
            description: 'Purple Patch operates not only as a business selling delicious food, but also as a space where Patrice can share her Filipino culinary heritage with local communities and her restaurant staff, made up of people from various racial, ethnic, and cultural backgrounds.',
            transcript: 'I have some of the best employees in the world. They\'ve embraced a cuisine that had no representation in the nation\'s capital. They are introducing a cuisine to customers that may have never had our cuisine before, or even better, ones that have had our cuisine, and know how it should be served, or know how to properly enunciate some of the terminology of our cuisine. And they\'re able to do that. That\'s a challenge. Nobody in my restaurant is Filipino except me. Imagine not only teaching back of the house, how to cook your food and telling them that you can do it. “You can do it, you can do it. Oh my God, that\'s perfect. Just like I would make it. My mom would be so proud right now. I love it. Make it again. Let\'s do it again. One more time. Let\'s do it. Let\'s do it.” Or talking to my staff and saying, “this is how you say lumpia. It\'s not lou- em-pia, it\'s lum-pia, lumpia.” Or teaching them about “what is patis? patis is a fish sauce, and this is what\'s in the fish sauce,” constantly teaching people.',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
                {
            id: 's14',
            title: 'A Space for Filipino Community in DC and Beyond',
            image: './images/Slide_14.jpeg',
            audio: './audio/DCOHC_PurplePatch_Slide_04.mp3',
            description: 'According to the 2020 US Census, Filipinos constitute 4.2 million of the 22.9 million Asian American and Pacific Islander people living in the United States. Despite Filipino people being the third largest Asian demographic —  followed by Chinese and Asian Indians —  Filipino cuisine has not shared proportionate representation in the American culinary landscape. Through Purple Patch, Patrice has created a space for Filipino communities in the District and the greater Washington area.',
            transcript: 'By opening up this Filipino restaurant, Filipinos from all over the country, and those that don\'t even live in the country, come to Washington DC, and they find my restaurant. They come here and they feel a sense of community. They feel at home. Often you\'ll find people that work at the Philippine Embassy at my restaurant. You\'ll find very prominent members of the Filipino community at my restaurant. I have the full support and backing of the Filipino community. There\'ll be a handful that question why you do things the way you do, and that\'s going to be with any ethnic cuisine that you\'re going to put out, or you\'re going to represent. But, for the most part, I feel totally supported by the Filipino community.<br><br>I\'ve given a lot. I give a lot, and my community knows. You can ask anybody in the Filipino community, “does Patrice Cleary give back to her community?” Some of them might even cry over what I do for my community. I give back hand over fist in any way I can. Whether it\'s through a speaking engagement, and it\'s my time, or whether through food and donating food, or whether it\'s through holding an event at my restaurant. I always feel that it\'s my job, and my duty to give back to my community. But what they give me back in return is, they give me the gift of acknowledging what I do on a daily basis, through just coming to my restaurant and eating my food. On top of that wanting to bring friends and family members and colleagues to my restaurant, because that\'s validation all in itself, that you are doing the right job, and you are the perfect person chosen for this job. ',
            location: {
                center: [104.23839, 5.85966],
                zoom: 4.8,
                pitch: 50.00,
                bearing: -0.02
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.85
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },

    ]
};
