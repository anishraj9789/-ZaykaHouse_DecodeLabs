const recipes = [
    {
        id: 1,
        name: "Paneer Butter Masala",
        cuisine: "North Indian",
        time: "45 min",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format",
        desc: "Creamy, rich tomato-based gravy with soft paneer cubes - a restaurant favorite!",
        ingredients: ["200g Paneer (cubed)", "2 tbsp Butter", "1 cup Tomato puree", "1 tbsp Ginger-garlic paste", "1 tsp Kashmiri red chili powder", "1 tsp Garam masala", "1/2 cup Fresh cream", "1 tsp Kasuri methi", "1 tbsp Honey/sugar", "Salt to taste", "2 tbsp Oil"],
        steps: [
            "Heat 1 tbsp butter and 1 tbsp oil in a pan. Add ginger-garlic paste and sauté for 30 seconds until aromatic.",
            "Add tomato puree and cook on medium heat for 8-10 minutes until the puree thickens and oil starts separating from the sides.",
            "Add red chili powder, garam masala, and salt. Mix well and cook for another 2 minutes.",
            "Reduce heat to low and add fresh cream. Stir continuously to get a smooth gravy. Add 1/2 cup water to adjust consistency.",
            "Add honey/sugar and kasuri methi. Simmer for 2-3 minutes.",
            "In a separate pan, heat remaining butter and lightly fry paneer cubes until golden on edges (1-2 minutes).",
            "Add fried paneer to the gravy and simmer for 5 minutes. Serve hot with naan or roti."
        ]
    },
    {
        id: 2,
        name: "Dal Makhani",
        cuisine: "North Indian",
        time: "60 min",
        image: "dal-makhani.jpg",
        desc: "Creamy black lentils simmered overnight with butter and spices.",
        ingredients: ["1 cup Whole black urad dal", "1/4 cup Rajma (kidney beans)", "3 tbsp Butter", "2 tbsp Oil", "1 Onion (finely chopped)", "2 Tomatoes (pureed)", "1 tbsp Ginger-garlic paste", "1 tsp Cumin seeds", "1 tsp Red chili powder", "1/2 tsp Turmeric", "1 tsp Garam masala", "1/2 cup Fresh cream", "Salt to taste"],
        steps: [
            "Soak urad dal and rajma overnight (8 hours). Pressure cook with 4 cups water, salt, and turmeric for 6-7 whistles until soft.",
            "Heat butter and oil in a heavy-bottomed pan. Add cumin seeds and let them crackle.",
            "Add chopped onions and sauté until golden brown (5-6 minutes). Add ginger-garlic paste and cook for 1 minute.",
            "Add tomato puree and cook until oil separates (8-10 minutes). Add red chili powder and garam masala.",
            "Add the cooked dal to the masala. Mix well and add 1 cup water. Simmer on low heat for 30 minutes, stirring occasionally.",
            "Mash some dal against the pan sides to thicken the gravy. Add fresh cream and simmer for another 10 minutes.",
            "Garnish with more cream and butter. Serve hot with naan or rice."
        ]
    },
    {
        id: 3,
        name: "Chole Bhature",
        cuisine: "North Indian",
        time: "90 min",
        image: "chole-bhature.jpg",
        desc: "Spicy chickpea curry served with fluffy deep-fried bread - a Punjabi classic!",
        ingredients: ["1 cup Chickpeas (soaked overnight)", "2 Onions (finely chopped)", "2 Tomatoes (pureed)", "1 tbsp Ginger-garlic paste", "2 tsp Chole masala", "1 tsp Cumin seeds", "1 tsp Amchur powder", "1 tsp Coriander powder", "2 tbsp Oil", "For Bhature: 2 cups Maida, 1/2 cup Yogurt, 1 tsp Baking soda, Salt, Oil for frying"],
        steps: [
            "Pressure cook soaked chickpeas with water, salt, and tea bag (for color) for 5-6 whistles until soft.",
            "Heat oil in a pan. Add cumin seeds and let them splutter. Add chopped onions and sauté until golden (5-7 minutes).",
            "Add ginger-garlic paste and cook for 1 minute. Add tomato puree and cook until oil separates (8-10 minutes).",
            "Add chole masala, coriander powder, and amchur. Cook for 2 minutes. Add the boiled chickpeas with water.",
            "Simmer for 15-20 minutes, mashing some chickpeas to thicken the gravy.",
            "For Bhature: Mix maida, yogurt, baking soda, and salt. Knead into soft dough using warm water. Rest for 2 hours.",
            "Roll dough into circles and deep fry in hot oil until puffed and golden. Serve hot with chole and onions."
        ]
    },
    {
        id: 4,
        name: "Shahi Paneer",
        cuisine: "North Indian",
        time: "40 min",
        image: "shahi-paneer.jpg",
        desc: "Royal creamy paneer curry with nuts and aromatic spices.",
        ingredients: ["250g Paneer", "2 Onions", "1/2 cup Cashews", "2 tbsp Poppy seeds", "1/2 cup Yogurt", "1 tsp Cumin", "1 tsp Coriander powder", "1/2 tsp Turmeric", "1 tsp Kashmiri chili", "1/2 tsp Garam masala", "2 tbsp Ghee", "1/4 cup Milk", "Salt", "Fresh cream"],
        steps: [
            "Blend onions, cashews, and poppy seeds with 1/4 cup water into a smooth paste.",
            "Heat ghee in a pan. Add cumin seeds and the prepared paste. Cook until oil separates (10-12 minutes), stirring frequently.",
            "Add coriander powder, turmeric, and Kashmiri chili. Cook for 2 minutes.",
            "Lower heat and add beaten yogurt slowly, stirring continuously to prevent curdling. Cook for 5-6 minutes.",
            "Add 1 cup water and bring to boil. Simmer for 10 minutes. Add salt and garam masala.",
            "Add paneer cubes and milk. Simmer for 5 minutes. Add fresh cream before serving.",
            "Garnish with slivered almonds. Serve with butter naan or tandoori roti."
        ]
    },
    {
        id: 5,
        name: "Aloo Paratha",
        cuisine: "North Indian",
        time: "50 min",
        image: "aloo-paratha.jpg",
        desc: "Stuffed flatbread with spiced mashed potatoes - perfect breakfast!",
        ingredients: ["For Dough: 2 cups Wheat flour, Water, Salt, 1 tbsp Oil", "For Filling: 4 Potatoes (boiled & mashed)", "1 Onion (finely chopped)", "2 Green chilies (chopped)", "1 tsp Cumin seeds", "1 tsp Amchur powder", "1 tsp Red chili powder", "1/2 tsp Garam masala", "Fresh coriander", "Butter for serving"],
        steps: [
            "Knead wheat flour with salt and oil using warm water. Make a soft dough. Cover and rest for 20 minutes.",
            "Mix mashed potatoes with all filling ingredients (onion, chilies, spices, coriander). Divide into equal balls.",
            "Divide dough into balls larger than filling balls. Roll a dough ball into a small circle.",
            "Place a potato filling ball in center. Bring edges together, seal tightly, and flatten gently.",
            "Roll carefully into a 6-7 inch circle without letting filling come out. Dust with flour if needed.",
            "Heat a tawa (griddle). Cook paratha on medium heat until brown spots appear (30 seconds). Flip.",
            "Apply ghee/butter on both sides and cook until golden and crisp. Repeat for all parathas.",
            "Serve hot with butter, yogurt, and pickle."
        ]
    },
    {
        id: 6,
        name: "Malai Kofta",
        cuisine: "North Indian",
        time: "70 min",
        image: "malai-koFTA.jpg",
        desc: "Vegetable and paneer dumplings in rich creamy tomato gravy.",
        ingredients: ["Kofta: 2 Potatoes, 100g Paneer, 1/4 cup Corn flour, 2 tbsp Cashews, Raisins, Spices", "Gravy: 3 Tomatoes, 10 Cashews, 1 Onion, 1 tbsp Ginger-garlic, 1/2 cup Cream, 1 tsp Garam masala", "Oil for frying"],
        steps: [
            "For Kofta: Boil and mash potatoes. Grate paneer. Mix with corn flour, salt, chili powder, and garam masala.",
            "Stuff each kofta with a cashew and raisin. Shape into smooth balls.",
            "Deep fry koftas in medium hot oil until golden brown. Drain and set aside.",
            "For Gravy: Boil tomatoes with cashews. Blend into smooth puree.",
            "Heat oil, sauté onions until brown. Add ginger-garlic paste. Add tomato-cashew puree and cook for 10 minutes.",
            "Add water, cream, garam masala, and sugar. Simmer for 10 minutes until thick.",
            "Just before serving, add koftas to gravy (don't boil koftas or they'll break).",
            "Garnish with cream and coriander. Serve with naan or jeera rice."
        ]
    },

    // ========== SOUTH INDIAN (6 dishes) ==========
    {
        id: 7,
        name: "Masala Dosa",
        cuisine: "South Indian",
        time: "30 min (+fermentation)",
        image: "masala-dosa.jpg",
        desc: "Crispy rice crepe filled with spiced potato masala - South Indian staple!",
        ingredients: ["Dosa batter: 2 cups Rice, 1/2 cup Urad dal, 1/4 tsp Fenugreek seeds", "Potato filling: 4 Potatoes, 2 Onions, 1 tsp Mustard seeds, 10 Curry leaves, 2 Green chilies, 1/2 tsp Turmeric", "Oil/ghee for cooking"],
        steps: [
            "Soak rice, urad dal, and fenugreek for 5 hours. Grind to smooth batter. Ferment overnight (8-10 hours).",
            "For filling: Boil and roughly mash potatoes. Heat oil, add mustard seeds and let them pop.",
            "Add curry leaves, chopped green chilies, and onions. Sauté until onions are soft (3-4 minutes).",
            "Add turmeric and mashed potatoes. Mix well. Add salt and coriander. Keep aside.",
            "Heat a non-stick tawa. Sprinkle water to check temperature - it should sizzle immediately.",
            "Pour a ladle of batter in center. Spread thinly in circular motion to make a crispy crepe.",
            "Drizzle oil/ghee around edges. Cook until golden and crisp (2-3 minutes).",
            "Place potato filling in center. Fold dosa over. Serve hot with coconut chutney and sambar."
        ]
    },
    {
        id: 8,
        name: "Idli Sambar",
        cuisine: "South Indian",
        time: "40 min (+fermentation)",
        image: "idli-sambar.jpg",
        desc: "Soft steamed rice cakes served with lentil-vegetable stew - healthy breakfast!",
        ingredients: ["Idli: 2 cups Idli rice, 1 cup Urad dal, 1/2 tsp Fenugreek", "Sambar: 1 cup Toor dal, Mixed veggies (drumstick, pumpkin, carrot), 2 tbsp Sambar powder, Tamarind, Curry leaves, Mustard seeds"],
        steps: [
            "Soak rice and urad dal separately for 5 hours. Grind dal to fluffy paste, rice to slightly coarse. Mix and ferment 8 hours.",
            "Pour idli batter into greased idli molds. Steam for 10-12 minutes until toothpick comes clean.",
            "For Sambar: Pressure cook toor dal with turmeric until soft (4 whistles). Mash well.",
            "In a pot, add chopped vegetables with water and tamarind extract. Boil until vegetables are tender.",
            "Add sambar powder, salt, and cooked dal. Simmer for 10 minutes.",
            "Temper with mustard seeds, curry leaves, red chilies, and asafoetida in hot oil.",
            "Pour tempering into sambar. Garnish with coriander.",
            "Serve hot idlis with sambar and coconut chutney."
        ]
    },
    {
        id: 9,
        name: "Hyderabadi Biryani",
        cuisine: "South Indian",
        time: "75 min",
        image: "hyderabadi-biryani.jpg",
        desc: "Fragrant layered rice with vegetables and whole spices - Nizami legacy!",
        ingredients: ["2 cups Basmati rice", "1 cup Mixed veggies (carrot, beans, cauliflower)", "1 cup Thick yogurt", "2 Onions (fried)", "1 tbsp Ginger-garlic paste", "2 tsp Biryani masala", "Saffron strands (in warm milk)", "Mint & coriander leaves", "Whole spices: bay leaf, cardamom, cloves, cinnamon", "Ghee", "Salt"],
        steps: [
            "Wash and soak basmati rice for 30 minutes. Boil with whole spices, salt until 70% cooked. Drain water.",
            "Heat ghee, fry sliced onions until golden brown. Remove half for garnish.",
            "In the same ghee, add ginger-garlic paste. Add mixed vegetables and sauté for 5 minutes.",
            "Add biryani masala, red chili powder, and salt. Cook for 2 minutes. Turn off heat.",
            "Add yogurt, mint, coriander, and half of fried onions to the vegetable mixture.",
            "In a heavy-bottomed pot, layer half the rice, then all vegetable mixture, then remaining rice.",
            "Top with saffron milk, remaining fried onions, and ghee. Sprinkle rose water (optional).",
            "Cover tightly with foil and lid. Cook on lowest heat (dum) for 20-25 minutes.",
            "Gently mix layers before serving. Serve with raita and salan."
        ]
    },
    {
        id: 10,
        name: "Rava Uttapam",
        cuisine: "South Indian",
        time: "25 min",
        image: "rava-uttapam.jpg",
        desc: "Thick savory pancakes topped with vegetables - instant semolina version!",
        ingredients: ["1 cup Rava (semolina)", "1/4 cup Curd", "1 Onion (finely chopped)", "1 Tomato (chopped)", "1 Capsicum (chopped)", "1 Green chili (chopped)", "Fresh coriander", "1/2 tsp Eno fruit salt (or baking soda)", "Salt", "Oil for cooking"],
        steps: [
            "In a bowl, mix rava, curd, salt, and 1 cup water. Make a smooth batter (pouring consistency). Rest for 15 minutes.",
            "Add chopped vegetables (onion, tomato, capsicum, chili, coriander) to the batter. Mix well.",
            "Just before making uttapams, add eno fruit salt and mix gently. Batter will become frothy.",
            "Heat a non-stick tawa. Pour a ladleful of batter - do not spread (utapam should be thick).",
            "Sprinkle extra chopped vegetables on top and press lightly.",
            "Drizzle oil around edges. Cook on medium heat until bottom is golden (2-3 minutes).",
            "Flip carefully and cook other side for 1-2 minutes until crispy.",
            "Serve hot with coconut chutney and sambar."
        ]
    },
    {
        id: 11,
        name: "Lemon Rice",
        cuisine: "South Indian",
        time: "20 min",
        image: "lemon-rice.jpg",
        desc: "Tangy, flavorful rice tempered with peanuts and curry leaves - quick temple style!",
        ingredients: ["2 cups Cooked rice (cooled)", "2 tbsp Lemon juice", "1/4 cup Peanuts", "1 tsp Mustard seeds", "1 tsp Urad dal", "1 tsp Chana dal", "10 Curry leaves", "2 Green chilies (slit)", "1/2 tsp Turmeric", "2 tbsp Oil", "Salt", "Fresh coriander"],
        steps: [
            "Heat oil in a pan. Add mustard seeds and let them pop completely.",
            "Add urad dal and chana dal. Fry until golden brown (1-2 minutes).",
            "Add peanuts and fry until crunchy (2 minutes). Add curry leaves and green chilies. Sauté for 30 seconds.",
            "Turn heat to low. Add turmeric powder and mix quickly (don't burn).",
            "Add cooked rice (should be at room temperature). Gently mix everything without breaking rice grains.",
            "Turn off heat. Add lemon juice and salt. Mix well.",
            "Garnish with fresh coriander leaves.",
            "Let it rest for 5 minutes before serving so flavors absorb. Serve with papad or raita."
        ]
    },
    {
        id: 12,
        name: " parotha",
        cuisine: "South Indian",
        time: "40 min (+fermentation)",
        image: "parotha.jpg",
        desc: "Lacy-edged fermented rice pancakes with coconut vegetable stew - Kerala special!",
        ingredients: ["2 to 2½ cups whole wheat flour (atta)", "½ teaspoon salt (optional)", "1 to 2 teaspoons oil or ghee", "¾ to 1 cup warm water (adjust to dough consistency)", "3 to 4 tablespoons melted ghee or oil for layering and frying"],
        steps: [
            "Prepare the dough: Mix 2 cups of whole wheat flour, a pinch of salt, and water gradually to knead a soft, smooth dough; rest for 20–30 minutes.",
            "Prepare the filling: Common options include spiced mashed potatoes, paneer with herbs, or finely chopped vegetables seasoned with salt, chili, and spices.",
            "Divide dough: Roll dough into small balls and roll each ball into a small circle using a rolling pin.",
            "Add filling: Place a spoonful of filling in the center, fold edges over to enclose, and gently roll again into a flat circle without spilling the filling.",
            " Heat the pan: Preheat a tawa or skillet over medium heat and lightly grease if needed.",
            " Cook paratha: Place the rolled paratha on the skillet, cook until browned spots appear, flip, and lightly brush with ghee or oil on both sides until fully cooked.",
            "Serve hot: Enjoy with yogurt, chutney, or curry."
        ]
    },

    // ========== SNACKS (5 dishes) ==========
    {
        id: 13,
        name: "Samosa",
        cuisine: "Snacks",
        time: "60 min",
        image: "samosa.jpg",
        desc: "Crispy triangular pastries filled with spiced potatoes and peas.",
        ingredients: ["Dough: 2 cups Maida, 4 tbsp Oil, Ajwain, Salt", "Filling: 4 Potatoes, 1/2 cup Green peas, 1 tsp Cumin, 1 tsp Fennel seeds, 1 tsp Amchur, 2 Green chilies, Ginger, Coriander", "Oil for deep frying"],
        steps: [
            "Mix maida, ajwain, salt, and oil. Add water gradually and knead stiff dough. Cover and rest for 30 minutes.",
            "Boil and mash potatoes. Heat oil, add cumin and fennel seeds. Add ginger, chilies, and mashed potatoes.",
            "Add peas, amchur, garam masala, salt, and coriander. Mix well. Filling is ready. Cool completely.",
            "Divide dough into equal balls. Roll each into a circle (6 inches). Cut into two halves.",
            "Take one half, form a cone by overlapping edges (seal with water). Fill with 2 tbsp filling.",
            "Seal the top edge with water, pressing firmly. Make sure no gaps remain.",
            "Heat oil for deep frying on medium heat. Fry samosas in batches until golden brown (8-10 minutes).",
            "Drain on paper towel. Serve hot with mint chutney and tamarind chutney."
        ]
    },
    {
        id: 14,
        name: "Paneer Tikka",
        cuisine: "Snacks",
        time: "45 min",
        image: "paneer-tikka.jpg",
        desc: "Grilled cottage cheese marinated in spiced yogurt - perfect party starter!",
        ingredients: ["250g Paneer (cubed)", "1/2 cup Thick yogurt", "1 tbsp Ginger-garlic paste", "1 tsp Kashmiri red chili", "1 tsp Cumin powder", "1 tsp Coriander powder", "1/2 tsp Garam masala", "1 tbsp Gram flour (besan)", "1 tbsp Mustard oil", "Lemon juice", "Capsicum & Onion (cubed)", "Chaat masala"],
        steps: [
            "Hang yogurt in muslin cloth for 30 minutes to remove excess water. Dry roast besan until aromatic.",
            "In a bowl, mix thick yogurt, roasted besan, ginger-garlic paste, chili, cumin, coriander, garam masala, salt, mustard oil, and lemon juice.",
            "Add paneer cubes and vegetable cubes to marinade. Coat well. Cover and refrigerate for 2 hours (minimum).",
            "If using oven: Preheat to 200°C. Thread paneer and veggies alternately on skewers.",
            "Grill for 12-15 minutes, turning halfway, until charred spots appear.",
            "If using stovetop: Heat a tawa with oil. Place skewers or directly cook pieces until golden on all sides.",
            "Brush with butter in last 2 minutes of cooking.",
            "Sprinkle chaat masala and serve hot with green chutney and onion rings."
        ]
    },
    {
        id: 15,
        name: "Onion Pakora",
        cuisine: "Snacks",
        time: "25 min",
        image: "onion-pakora.jpg",
        desc: "Crispy onion fritters - perfect monsoon evening snack with chai!",
        ingredients: ["2 Large onions (thinly sliced)", "1 cup Besan (gram flour)", "2 tbsp Rice flour (for crispiness)", "1 tsp Red chili powder", "1/2 tsp Turmeric", "1 tsp Ajwain (carom seeds)", "1 tsp Ginger-garlic paste", "Fresh coriander", "Salt", "Oil for deep frying"],
        steps: [
            "Slice onions very thin (use mandoline if possible). Separate the rings gently.",
            "In a bowl, add besan, rice flour, chili powder, turmeric, ajwain, ginger-garlic paste, salt, and coriander.",
            "Add sliced onions to the flour mixture. Mix with hands until onions are coated.",
            "Sprinkle water very gradually (2-3 tbsp only). The batter should coat onions but not be runny.",
            "Let the mixture rest for 10 minutes (onions release water). Don't add more water.",
            "Heat oil for deep frying on medium heat. Drop small portions of batter using fingers.",
            "Fry until golden brown and crisp (3-4 minutes), turning occasionally.",
            "Drain on paper towel. Serve hot with mint chutney or tomato ketchup."
        ]
    },
    {
        id: 16,
        name: "Vada Pav",
        cuisine: "Snacks",
        time: "40 min",
        image: "vada-pav.jpg",
        desc: "Mumbai's famous burger - spicy potato fritter in soft bun with chutneys!",
        ingredients: ["Vada: 4 Potatoes, 1 tbsp Ginger-garlic paste, 2 Green chilies, 1 tsp Mustard seeds, Curry leaves, Turmeric, Coriander", "Batter: 1 cup Besan, 1/2 tsp Turmeric, 1/2 tsp Red chili, Salt, Water", " Pav buns, Garlic chutney, Tamarind chutney, Green chutney, Fried green chili"],
        steps: [
            "Boil and mash potatoes. Heat oil, add mustard seeds, curry leaves, and green chilies.",
            "Add ginger-garlic paste and mashed potatoes. Add turmeric and salt. Mix well. Cool and make balls.",
            "Make besan batter with water to dipping consistency (like pancake batter).",
            "Dip potato balls in batter and deep fry until golden (4-5 minutes). Drain.",
            "Slice pav buns horizontally, apply garlic chutney on one side and green chutney on other.",
            "Place hot vada inside the pav. Add tamarind chutney.",
            "Serve with fried green chili and extra chutneys on side.",
            "Best enjoyed with a cup of masala chai!"
        ]
    },
    {
        id: 17,
        name: "Chicken 65 (Paneer Version)",
        cuisine: "Snacks",
        time: "35 min",
        image: "paneer-65.jpg",
        desc: "Spicy, tangy fried paneer - popular street food from Chennai!",
        ingredients: ["250g Paneer (cubed)", "2 tbsp Curd", "1 tbsp Ginger-garlic paste", "1 tsp Red chili powder", "1/2 tsp Turmeric", "1 tsp Garam masala", "1 tbsp Corn flour", "1 tbsp Rice flour", "Curry leaves", "Green chilies", "Oil for frying", "Lemon juice", "Food color (optional)"],
        steps: [
            "In a bowl, mix curd, ginger-garlic paste, chili powder, turmeric, garam masala, corn flour, rice flour, salt, and lemon juice.",
            "Add paneer cubes and coat well. Marinate for 30 minutes.",
            "Heat oil in a deep pan. When medium hot, drop marinated paneer pieces one by one.",
            "Fry until golden brown and crisp (3-4 minutes). Remove and drain.",
            "In a separate pan, heat 1 tbsp oil. Add curry leaves and slit green chilies. Sauté for 30 seconds.",
            "Add fried paneer pieces and toss well for 1-2 minutes.",
            "Sprinkle chaat masala and more lemon juice.",
            "Garnish with fried curry leaves. Serve hot with onion rings and mint chutney."
        ]
    },

    // ========== DESSERTS (5 dishes) ==========
    {
        id: 18,
        name: "Gulab Jamun",
        cuisine: "Desserts",
        time: "45 min",
        image: "gulab-jamun.jpg",
        desc: "Soft, spongy milk balls soaked in rose-scented sugar syrup - festive favorite!",
        ingredients: ["1 cup Milk powder", "1/4 cup Maida", "1/4 tsp Baking soda", "2 tbsp Ghee", "3-4 tbsp Milk (for dough)", "Sugar syrup: 2 cups Sugar, 2 cups Water, 4 Cardamoms, 1 tsp Rose water, Saffron strands", "Oil/ghee for frying"],
        steps: [
            "Mix milk powder, maida, and baking soda in a bowl. Add ghee and rub into flour until crumbly.",
            "Add milk gradually and knead into soft, smooth dough (don't over-knead). Cover and rest for 10 minutes.",
            "Make sugar syrup: Boil sugar and water with cardamoms until slightly sticky (1-string consistency).",
            "Add rose water and saffron to syrup. Keep warm.",
            "Divide dough into 20 small balls. Roll smoothly without cracks (very important!).",
            "Heat ghee/oil on LOWEST heat. Fry balls in small batches, stirring gently for even coloring.",
            "Fry until deep golden brown (5-6 minutes) - color deepens in syrup.",
            "Drain and drop directly into warm sugar syrup. Soak for minimum 2 hours.",
            "Serve warm or at room temperature. Garnish with chopped pistachios."
        ]
    },
    {
        id: 19,
        name: "Rasmalai",
        cuisine: "Desserts",
        time: "60 min",
        image: "rasmalai.jpg",
        desc: "Soft chenna discs in creamy cardamom-saffron milk - Bengali royal dessert!",
        ingredients: ["1 liter Full cream milk (for chenna)", "2 tbsp Lemon juice", "2 cups Sugar", "For rabri: 1 liter Milk, 1/2 cup Sugar, 4 Cardamoms, Saffron strands, Chopped nuts (pistachio, almond)"],
        steps: [
            "Boil 1 liter milk. Add lemon juice slowly until milk curdles. Strain through muslin cloth.",
            "Rinse chenna under cold water to remove lemon taste. Hang for 30 minutes to drain excess water.",
            "Knead chenna for 8-10 minutes until smooth. Make small balls and flatten into discs.",
            "Boil 4 cups water with 2 cups sugar. Add discs and cook for 15 minutes (they double in size).",
            "For rabri: Boil second liter of milk until reduced to half (30 minutes), stirring frequently.",
            "Add sugar, cardamom, and saffron. Simmer for 10 more minutes until thickened.",
            "Take cooked discs from sugar syrup and squeeze lightly. Add to the thickened rabri milk.",
            "Refrigerate for 3-4 hours. Garnish with chopped nuts before serving."
        ]
    },
    {
        id: 20,
        name: "Jalebi",
        cuisine: "Desserts",
        time: "50 min (+fermentation)",
        image: "jalebi.jpg",
        desc: "Crispy, juicy, orange spiral sweets - North India's favorite street dessert!",
        ingredients: ["1 cup Maida", "2 tbsp Corn flour", "1/2 cup Yogurt", "1/2 tsp Baking powder", "Pinch of orange food color", "Sugar syrup: 1.5 cups Sugar, 1 cup Water, 1/2 tsp Cardamom, Saffron", "Oil/ghee for frying"],
        steps: [
            "Mix maida, corn flour, yogurt, baking powder, food color, and 3/4 cup water. Make smooth batter (like dosa batter).",
            "Cover and ferment in warm place for 12 hours (or overnight).",
            "Make sugar syrup: Boil sugar and water until 1-string consistency. Add cardamom and saffron. Keep warm.",
            "After fermentation, whisk batter well. It should be pouring consistency (add water if too thick).",
            "Fill batter in a piping bag or jalebi cloth with small hole.",
            "Heat oil/ghee in a flat pan. Pipe batter in spiral circles (start from center, go outwards).",
            "Fry until crisp and golden (not brown). Should take 1-2 minutes per side.",
            "Remove directly into warm sugar syrup. Soak for 30 seconds, not more.",
            "Remove and serve hot. Crispy outside, juicy inside!"
        ]
    },
    {
        id: 21,
        name: "Kheer (Rice Pudding)",
        cuisine: "Desserts",
        time: "40 min",
        image: "kheer.jpg",
        desc: "Creamy rice pudding with nuts and cardamom - comforting Indian dessert.",
        ingredients: ["1 liter Full cream milk", "1/4 cup Basmati rice (soaked 20 min)", "1/2 cup Sugar", "4 Cardamoms (crushed)", "2 tbsp Cashews & almonds (chopped)", "2 tbsp Raisins", "Saffron strands", "1/4 tsp Nutmeg powder"],
        steps: [
            "Wash and soak rice for 20 minutes. Drain and slightly crush rice (not too fine).",
            "In a heavy-bottomed pan, boil milk. Once boiling, reduce heat to low-medium.",
            "Add crushed rice to milk. Stir continuously to prevent sticking at bottom.",
            "Cook for 30-40 minutes until rice is soft and milk thickens to half quantity.",
            "Add sugar and stir until dissolved (sugar will thin the kheer initially, then it thickens again).",
            "Add cardamom powder, nutmeg, and half of the nuts (save some for garnish).",
            "Simmer for another 5-10 minutes until thick creamy consistency.",
            "Add raisins and saffron soaked in 2 tbsp warm milk.",
            "Kheer thickens more as it cools. Serve warm or chilled, garnished with remaining nuts."
        ]
    },
    {
        id: 22,
        name: "Gajar Ka Halwa",
        cuisine: "Desserts",
        time: "50 min",
        image: "gajar-ka-halwa.jpg",
        desc: "Winter-special carrot pudding with khoya and nuts - North Indian classic!",
        ingredients: ["4 cups Red carrots (grated)", "1 liter Full cream milk", "1/2 cup Sugar", "4 tbsp Ghee", "1/2 cup Khoya (evaporated milk solids)", "2 tbsp Cashews & almonds", "2 tbsp Raisins", "4 Cardamoms", "Saffron strands (optional)"],
        steps: [
            "Wash, peel, and grate carrots finely (use red Delhi carrots for best results).",
            "In a heavy-bottomed pan, heat 2 tbsp ghee. Add grated carrots and sauté for 5 minutes on medium heat.",
            "Add full milk and bring to boil. Reduce heat and simmer, stirring occasionally.",
            "Cook until milk is completely absorbed and carrots are soft (25-30 minutes).",
            "Add sugar and mix well. Sugar will make it liquid again - cook until moisture evaporates (8-10 minutes).",
            "In a separate pan, heat remaining ghee. Fry nuts and raisins until golden. Keep aside.",
            "Add cardamom powder and khoya to the halwa. Mix well and cook for 5 more minutes.",
            "The halwa should leave the sides of the pan and come together like a soft lump.",
            "Garnish with fried nuts and serve hot or warm. Reheat with a splash of milk if needed."
        ]
    }
];

// ----- FAVORITES (localStorage) -----
let favorites = JSON.parse(localStorage.getItem("indianFavs")) || [];

function saveFavorites() {
    localStorage.setItem("indianFavs", JSON.stringify(favorites));
}

function toggleFavorite(id, event) {
    event.stopPropagation();
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    saveFavorites();
    renderRecipes();
}

// ----- Filter & Search Logic -----
let activeFilter = "All";
let searchQuery = "";

function getFilteredRecipes() {
    return recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = (activeFilter === "All") || (recipe.cuisine === activeFilter);
        return matchesSearch && matchesFilter;
    });
}

// ----- Render Recipe Cards -----
function renderRecipes() {
    const container = document.getElementById("recipesContainer");
    const filtered = getFilteredRecipes();
    
    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results">🍽️ No recipes found! Try searching for "Paneer" or "Dosa" 🍛</div>`;
        return;
    }
    
    container.innerHTML = filtered.map(recipe => {
        const isFav = favorites.includes(recipe.id);
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <div class="fav-star" data-id="${recipe.id}">${isFav ? "⭐" : "☆"}</div>
                <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}" onerror="this.src='https://placehold.co/400x200?text=Indian+Food'">
                <div class="recipe-info">
                    <div class="recipe-title">${recipe.name}</div>
                    <div class="recipe-meta">
                        <span class="cuisine">${recipe.cuisine}</span>
                        <span class="time">⏱️ ${recipe.time}</span>
                    </div>
                    <div class="desc">${recipe.desc}</div>
                </div>
            </div>
        `;
    }).join("");
    
    document.querySelectorAll(".fav-star").forEach(star => {
        const id = parseInt(star.getAttribute("data-id"));
        star.addEventListener("click", (e) => toggleFavorite(id, e));
    });
    
    document.querySelectorAll(".recipe-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("fav-star")) return;
            const recipeId = parseInt(card.getAttribute("data-id"));
            const recipe = recipes.find(r => r.id === recipeId);
            if (recipe) openModal(recipe);
        });
    });
}

// ----- Modal Functions -----
const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");

function openModal(recipe) {
    modalTitle.innerText = recipe.name;
    modalIngredients.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join("");
    modalSteps.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join("");
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function initFilters() {
    const filterContainer = document.getElementById("filterContainer");
    const categories = ["All", "North Indian", "South Indian", "Snacks", "Desserts"];
    filterContainer.innerHTML = categories.map(cat => 
        `<button class="filter-btn ${activeFilter === cat ? 'active' : ''}" data-filter="${cat}">${cat}</button>`
    ).join("");
    
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            activeFilter = btn.getAttribute("data-filter");
            initFilters();
            renderRecipes();
        });
    });
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderRecipes();
});

document.querySelector(".close-modal").addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

initFilters();
renderRecipes();
