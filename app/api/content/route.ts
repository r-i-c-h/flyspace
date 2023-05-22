// Server-side function to get auth

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
const posts = [
  {
    title: "The Benefits of Yoga",
    slug: "yoga-benefits",
    content: "Yoga is a practice that originated in ancient India and has become increasingly popular around the world. There are many benefits of practicing yoga, including increased flexibility, improved strength, reduced stress and anxiety, and better sleep. If you're interested in trying yoga, there are many classes available at gyms, yoga studios, and community centers."
  },
  {
    title: "Exploring the Outdoors",
    slug: "outdoor-exploration",
    content: "Spending time in nature is a great way to disconnect from technology and connect with the natural world. Whether you enjoy hiking, camping, or simply sitting in a park, there are many ways to explore the outdoors. Some benefits of spending time in nature include reduced stress, increased creativity, and improved physical health. So grab a backpack and head out on an adventure!"
  },
  {
    title: "The Power of Meditation",
    slug: "meditation-power",
    content: "Meditation is a technique for calming the mind and reducing stress. It involves focusing your attention on a particular object or thought, and allowing your mind to become still. There are many different types of meditation, including mindfulness meditation, loving-kindness meditation, and transcendental meditation. With regular practice, meditation can help you feel more relaxed, focused, and centered."
  },
  {
    title: "Here There Be Dragons",
    slug: "dragon-ahoy",
    content: "Dragons are mythical creatures that have captivated the imaginations of people for centuries. In many cultures, dragons are depicted as large, reptilian beasts with powerful wings, sharp claws, and a long, serpentine tail. They are often associated with fire and are said to be able to breathe flames from their mouths. Despite their fearsome appearance, dragons are also considered wise and noble creatures."
  }
];

export async function GET() {
  const session = await getServerSession();

  //! GET DB DATA HERE....
  return NextResponse.json(posts)
}
