"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Quote } from "lucide-react";

// Extended stories data with more details
const storiesData = [
    {
        id: 1,
        name: "Zain Spices",
        location: "Cairo, Egypt",
        date: "June 2024",
        description:
            "Abdelrahman fled Gaza with his family and founded Zain Spices, bringing authentic Palestinian flavors to Cairo with SafeGrow's support.",
        fullStory: `Abdelrahman fled Gaza in May 2024 after enduring months of unimaginable hardship, leaving with his wife and two young children. Despite immense tragedy, he carried a deep sense of resilience and a vision for rebuilding his life through his culture’s rich traditions.
      
          Inspired by Palestinian spice-making heritage, Abdelrahman founded Zain Spices. With SafeGrow's support, he received essential equipment like a roasting machine and grinder, enabling him to craft high-quality, all-natural spice blends. 
      
          Today, Zain Spices offers 36 blends, including traditional recipes like Gazawi Dukka and Za'atar. Abdelrahman's dream is to expand his business and employ other displaced Palestinians, giving them a chance to rebuild their lives.`,
        impact: [
            "Produced 36 unique spice blends",
            "Expanded customer base in Cairo",
            "Showcased at RDNA’s annual Christmas market",
            "Promoted Palestinian heritage through flavors"
        ],
        quote:
            "Through Zain Spices, I’ve not only rebuilt my livelihood but created a bridge between my heritage and my future.",
        img: "/iloveimg-converted/2.jpg",
        gallery: ["/iloveimg-converted/1.jpg", "/iloveimg-converted/2.jpg", "/iloveimg-converted/3.jpg", "/iloveimg-converted/5.jpg", "/iloveimg-converted/10.jpg", "/iloveimg-converted/6.jpg"],
        color: "#87CA2F"
    },
    {
        id: 2,
        name: "Rama Kitchen",
        location: "Cairo, Egypt",
        date: "December 2024",
        description:
            "Maha, a young mother from Gaza, started Rama Kitchen to share Palestinian culinary traditions and honor her late daughter’s memory.",
        fullStory: `Maha fled Gaza with her two daughters after enduring the unbearable hardships of war. Her youngest daughter, Rama, passed away due to a medical condition, leaving Maha heartbroken but determined to stay strong for her surviving child.
      
          With SafeGrow's support, Maha launched Rama Kitchen, offering homemade Palestinian dishes such as maqlouba, gazawi fatta, and musakhan. The organization provided her with kitchen appliances, promotional support, and a platform to reach customers in Cairo.
      
          Today, Rama Kitchen has garnered admiration for its authentic flavors. Maha dreams of expanding her business and hiring others, helping displaced individuals rebuild their lives.`,
        impact: [
            "Launched a business honoring Palestinian culinary traditions",
            "Built a growing Instagram presence with over 600 followers",
            "Received overwhelming customer praise for authentic meals",
            "Empowered a mother to rebuild her life and honor her daughter"
        ],
        quote:
            "Rama Kitchen is not just a business; it’s a way to keep my daughter’s memory alive and create a future for my family.",
        img: "/iloveimg-converted/22.jpg",
        gallery: ["/iloveimg-converted/20.jpg", "/iloveimg-converted/19.jpg", "/iloveimg-converted/22.jpg", "/iloveimg-converted/16.jpg", "/iloveimg-converted/24.jpg", "/iloveimg-converted/28.jpg"],
        color: "#ED5C2B"
    },
    {
        id: 3,
        name: "Raw'a",
        location: "Cairo, Egypt",
        date: "May 2024",
        description:
            "Bilal rebuilt his thriving furniture business, Raw’a, in Cairo with SafeGrow's support after losing everything during the conflict.",
        fullStory: `Bilal’s thriving furniture workshop in Gaza employed 15 craftsmen, producing sought-after custom pieces. The conflict destroyed his business and displaced his family, forcing him to start over in Cairo.
      
          Through SafeGrow's SafeBuild program, Bilal received woodworking tools, workspace, and seed funding to rebuild his business. Within weeks, he sold his first product—a custom dining table.
      
          Today, Raw’a employs five craftsmen and three apprentices, preserving traditional woodworking techniques and creating opportunities for others.`,
        impact: [
            "Created employment for 8 individuals",
            "Rebuilt a sustainable furniture business",
            "Preserved traditional craftsmanship",
            "Contributed to the local economy"
        ],
        quote:
            "SafeGrow didn't just help me restart my business; they helped me rebuild my dignity and purpose.",
        img: "/iloveimg-converted/12.jpg",
        gallery: ["/iloveimg-converted/13.jpg", "/iloveimg-converted/12.jpg", "/iloveimg-converted/14.jpg", "/iloveimg-converted/15.jpg"],
        color: "#FBB13C"
    }
];


export default function StoryPage() {
    const params = useParams();
    const story = storiesData.find(s => s.id === Number(params.id)) || storiesData[0];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/stories"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Stories
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    className="relative rounded-2xl overflow-hidden mb-12"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                >
                    <div className="aspect-[21/9] relative">
                        <Image
                            src={story.img}
                            alt={story.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(180deg, transparent 0%, ${story.color}80 100%)`
                            }}
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center gap-4 mb-4 text-sm">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {story.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {story.date}
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{story.name}</h1>
                        <p className="text-lg max-w-3xl">{story.description}</p>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        {story.fullStory.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-gray-800 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Quote */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <Quote className="w-8 h-8" style={{ color: story.color }} />
                            <p className="text-gray-800 italic">{story.quote}</p>
                        </div>

                        {/* Impact */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-lg font-semibold mb-4">Impact</h3>
                            <ul className="space-y-2">
                                {story.impact.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-600">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: story.color }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Gallery */}
                <motion.div
                    className="mt-12"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {story.gallery.map((img, index) => (
                            <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                                <Image
                                    src={img}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(180deg, transparent 0%, ${story.color}40 100%)`
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}