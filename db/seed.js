const { Pet, Comment } = require("../models/pet");

Pet.deleteMany({}).then(() => {
	Comment.deleteMany({}).then(() => {
		Pet.create({
			name: "Ginger",
			description:
				"Ginger is a sweet old pup with sandy brown fur and the beginnings of a gray moustache. Her hobbies include napping, letting her dad carry her around the neighborhood, and watching HGTV. That said, by 'watching' she really means 'sleeping on the heated tile in the basement while HGTV plays mindlessly in the background.'",
			species: "Dog",
			profilepicture: "https://i.imgur.com/uxKvuLC.jpg",
			licks: 4
		}).then(pet => {
			Promise.all([
				Comment.create({ message: "I love to eat peanut butter!" }).then(
					comment => {
						pet.comments.push(comment);
					}
				),
				Comment.create({
					message: "Woof woof woof, is this thing on?"
				}).then(comment => {
					pet.comments.push(comment);
				})
			]);
		});

		Pet.create({
			name: "Gouda",
			description:
				"Gouda is a bouncy pupper who's just so darn excited to be growing up. Much like his namesake, he's got a bit of a chip on his shoulder, but he means it all in good fun--he loves fun!",
			species: "Dog",
			profilepicture: "https://i.imgur.com/DqAaeM3.jpg",
			sociallink: "https://www.instagram.com/goudacheeseball/",
			licks: 10
		}).then(pet => {
			Promise.all([
				Comment.create({
					message: "I'm an Instagram celebrity!"
				}).then(comment => {
					pet.comments.push(comment);
				})
			]);
		});

		Pet.create({
			name: "Sassy",
			description:
				"Could there be a sassier dog than Sassy? Methinks not. Sassy loves wearing bows and bandanas, playing with her cat-brother Austin, and being the center of attention.",
			species: "Dog",
			profilepicture: "https://i.imgur.com/sw8R9Cg.jpg",
			sociallink: "https://www.instagram.com/sassythebabydog/",
			licks: 0
		}).then(pet => {
			Promise.all([
				Comment.create({
					message: "I'm an Instagram celebrity!"
				}).then(comment => {
					pet.comments.push(comment);
				})
			]);
		});
	});
});
