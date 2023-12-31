/** @format */

import { faker } from "@faker-js/faker";
import { sample } from "lodash";

// ----------------------------------------------------------------------

const users = [...Array(5)].map((_, index) => ({
	id: faker.datatype.uuid(),
	// date:
	avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
	name: faker.name.findName(),
	company: faker.company.companyName(),
	isVerified: faker.datatype.boolean(),
	status: sample(["active", "banned"]),
	role: sample([
		"Leader",
		"Hr Manager",
		"UI Designer",
		"UX Designer",
		"UI/UX Designer",
		"Project Manager",
		"Backend Developer",
		"Full Stack Designer",
		"Front End Developer",
		"Full Stack Developer",
	]),
}));

export default users;
