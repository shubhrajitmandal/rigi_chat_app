const chatData = [
  {
    id: 1,
    user: "Morty Smith",
    status: "online",
    imgURL:
      "https://cdn.dribbble.com/users/5592443/screenshots/14279512/media/d268ea5b50f076c55b7e0b363188eb46.png?compress=1&resize=400x300",
    chat: [
      {
        type: "recieved",
        messages: [
          "Hey there ✋",
          "If you have any questions, I’m here to help.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo provident quidem quibusdam ut, sapiente deleniti ducimus enim vero? Sit qui recusandae vero cumque?",
        ],
      },
      {
        type: "sent",
        messages: [
          "Hi there ✋ Thanks for asking.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit  consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, .",
          "Lorem ipsum dolor sit ametiusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet ceaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet",
          "Consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste,",
          "iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consecteturo quis exercitationem incidunt numquam vitae natus.",
          "Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit  consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, .",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
    ],
  },
  {
    id: 2,
    user: "Jerry Smith",
    status: "online",
    imgURL:
      "https://mystickermania.com/cdn/stickers/rick-and-morty/jerry-smith-best-dad-512x512.png",
    chat: [
      {
        type: "recieved",
        messages: [
          "Hey there ✋",
          "If you have any questions, I’m here to help.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo provident quidem quibusdam ut, sapiente deleniti ducimus enim vero? Sit qui recusandae vero cumque?",
        ],
      },
      {
        type: "sent",
        messages: [
          "Hi there ✋ Thanks for asking.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
    ],
  },
  {
    id: 3,
    user: "Beth Smith",
    status: "offline",
    imgURL:
      "https://i.pinimg.com/originals/43/1c/b9/431cb98e914a79c01ef4c7267fa3e0aa.png",
    chat: [
      {
        type: "recieved",
        messages: [
          "Hey there ✋",
          "If you have any questions, I’m here to help.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo provident quidem quibusdam ut, sapiente deleniti ducimus enim vero? Sit qui recusandae vero cumque?",
        ],
      },
      {
        type: "sent",
        messages: [
          "Hi there ✋ Thanks for asking.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit  consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, .",
          "Lorem ipsum dolor sit ametiusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
    ],
  },
  {
    id: 4,
    user: "BirdPerson",
    status: "online",
    imgURL:
      "https://www.seekpng.com/png/detail/115-1150076_birdperson-avatar-rick-and-morty-bird-person.png",
    chat: [
      {
        type: "recieved",
        messages: [
          "Hey there ✋",
          "If you have any questions, I’m here to help.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo provident quidem quibusdam ut, sapiente deleniti ducimus enim vero? Sit qui recusandae vero cumque?",
        ],
      },
      {
        type: "sent",
        messages: [
          "Hi there ✋ Thanks for asking.",
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "recieved",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos saepe quos, minima eaque maxime perferendis aut maiores iste, iusto quis exercitationem incidunt numquam vitae natus. Tempora incidunt repellendus hic. ",
        ],
      },
      {
        type: "sent",
        messages: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet iste adipisci velit soluta, similique quo",
        ],
      },
    ],
  },
];

export default chatData;
