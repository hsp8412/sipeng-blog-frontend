const posts = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odio perferendis velit",
    preview:
      "# PP  Lorem ipsum dolor sit amet, consectetur adipisicing elit. \nAt consequuntur corporis, deleniti earum exercitationem facere, hic illum ipsa ipsum magnam, nihil nulla numquam perferendis porro rerum sapiente tenetur! Aut culpa, hic inventore iusto minima mollitia repudiandae? Commodi consectetur consequatur culpa debitis deleniti dignissimos eius enim esse, est explicabo hic id iusto laboriosam minima minus nihil odit placeat quae quam qui quia quo quod reprehenderit similique soluta temporibus ut vero! Accusamus adipisci aliquam consectetur corporis cum distinctio, dolorem dolores, dolorum eum ex excepturi hic illo illum in iste nam omnis optio qui reprehenderit saepe sapiente tempora tempore? Earum fugit nulla repellat.",
    content:
      "# PP  Lorem ipsum dolor sit amet, consectetur adipisicing elit. \nAt consequuntur corporis, deleniti earum exercitationem facere, hic illum ipsa ipsum magnam, nihil nulla numquam perferendis porro rerum sapiente tenetur! Aut culpa, hic inventore iusto minima mollitia repudiandae? Commodi consectetur consequatur culpa debitis deleniti dignissimos eius enim esse, est explicabo hic id iusto laboriosam minima minus nihil odit placeat quae quam qui quia quo quod reprehenderit similique soluta temporibus ut vero! Accusamus adipisci aliquam consectetur corporis cum distinctio, dolorem dolores, dolorum eum ex excepturi hic illo illum in iste nam omnis optio qui reprehenderit saepe sapiente tempora tempore? Earum fugit nulla repellat.",
    userId: 1,
    coverImg: "/cover-image.jpeg",
    createdDate: new Date(2022, 4, 25, 15, 22, 18),
    updateDate: new Date(2022, 4, 25, 15, 22, 18),
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odio perferendis velit",
    preview:
      "PR Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur corporis, deleniti earum exercitationem facere, hic illum ipsa ipsum magnam, nihil nulla numquam perferendis porro rerum sapiente tenetur! Aut culpa, hic inventore iusto minima mollitia repudiandae? Commodi consectetur consequatur culpa debitis deleniti dignissimos eius enim esse, est explicabo hic id iusto laboriosam minima minus nihil odit placeat quae quam qui quia quo quod reprehenderit similique soluta temporibus ut vero! Accusamus adipisci aliquam consectetur corporis cum distinctio, dolorem dolores, dolorum eum ex excepturi hic illo illum in iste nam omnis optio qui reprehenderit saepe sapiente tempora tempore? Earum fugit nulla repellat.",
    content:
      "PR Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur corporis, deleniti earum exercitationem facere, hic illum ipsa ipsum magnam, nihil nulla numquam perferendis porro rerum sapiente tenetur! Aut culpa, hic inventore iusto minima mollitia repudiandae? Commodi consectetur consequatur culpa debitis deleniti dignissimos eius enim esse, est explicabo hic id iusto laboriosam minima minus nihil odit placeat quae quam qui quia quo quod reprehenderit similique soluta temporibus ut vero! Accusamus adipisci aliquam consectetur corporis cum distinctio, dolorem dolores, dolorum eum ex excepturi hic illo illum in iste nam omnis optio qui reprehenderit saepe sapiente tempora tempore? Earum fugit nulla repellat.",
    userId: 1,
    coverImg: "/cover-image.jpeg",
    createdDate: new Date(2022, 6, 27, 15, 22, 18),
    updateDate: new Date(2022, 6, 27, 15, 22, 18),
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odio perferendis velit",
    preview:
      "Pr Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur corporis, deleniti earum exercitationem facere, hic illum ipsa ipsum magnam, nihil nulla numquam perferendis porro rerum sapiente tenetur! Aut culpa, hic inventore iusto minima mollitia repudiandae? Commodi consectetur consequatur culpa debitis deleniti dignissimos eius enim esse, est explicabo hic id iusto laboriosam minima minus nihil odit placeat quae quam qui quia quo quod reprehenderit similique soluta temporibus ut vero! Accusamus adipisci aliquam consectetur corporis cum distinctio, dolorem dolores, dolorum eum ex excepturi hic illo illum in iste nam omnis optio qui reprehenderit saepe sapiente tempora tempore? Earum fugit nulla repellat.",
    content:
      "Pr Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur corporis, deleniti earum exercitationem facere, hic illum ipsa ipsum magnam, nihil nulla numquam perferendis porro rerum sapiente tenetur! Aut culpa, hic inventore iusto minima mollitia repudiandae? Commodi consectetur consequatur culpa debitis deleniti dignissimos eius enim esse, est explicabo hic id iusto laboriosam minima minus nihil odit placeat quae quam qui quia quo quod reprehenderit similique soluta temporibus ut vero! Accusamus adipisci aliquam consectetur corporis cum distinctio, dolorem dolores, dolorum eum ex excepturi hic illo illum in iste nam omnis optio qui reprehenderit saepe sapiente tempora tempore? Earum fugit nulla repellat.",
    userId: 1,
    coverImg: "/cover-image.jpeg",
    createdDate: new Date(2022, 5, 27, 15, 22, 18),
    updateDate: new Date(2022, 5, 27, 15, 22, 18),
  },
];

export const getPosts = () => {
  return posts;
};

export const getPostById = (id) => {
  const result = posts.find((post) => post.id == id);
  return result;
};
