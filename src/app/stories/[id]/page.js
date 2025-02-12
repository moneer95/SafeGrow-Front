"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Quote } from "lucide-react";
import StoryActions from "../../../components/StoryActions";

// Extended stories data with more details
const storiesData = [
    {
        id: 1,
        name: "Zain Spices",
        location: "Cairo, Egypt",
        date: "June 2024",
        description:
            "Abdelrahman fled Gaza with his family and founded Zain Spices, bringing authentic Palestinian flavors to Cairo with SafeGrow's support.",
        fullStory:       `Abdelrahman fled Gaza in May 2024 after enduring months of unimaginable hardship. He lost his parents, siblings, and his home to the ongoing genocide, leaving with his wife and two young children to protect what remained of his family. Despite this immense tragedy, Abdelrahman carried with him a deep sense of resilience—and a vision for rebuilding his life through his culture’s rich traditions.
        In Gaza, Palestinians have a centuries-old history of spice making, tracing back to their role as a vibrant trading hub along the Silk Road. Inspired by this heritage and recognizing a gap in the Egyptian market for fresh, high-quality, and flavorful spices, Abdelrahman founded Zain Spices, named after his youngest son. His mission was clear: to bring the authentic flavors of Palestinian spice culture to Cairo while creating a sustainable livelihood for his family.
        Crafting Excellence with SafeGrow’s Support
  
        Through SafeBuild, SafeGrow funded two essential pieces of equipment for Zain Spices: a roasting machine to enhance the natural flavors of cloves and spices, and a large-scale 10-kilogram grinder for producing finely ground, rich spice blends. With these tools, Abdelrahman has perfected the art of roasting and grinding whole spices, delivering a product that is both all-natural and bursting with authentic flavor.
        SafeGrow also supported Abdelrahman through SafeRevive, connecting him with local organic supermarket RDNA. This connection allowed him to showcase his products at RDNA’s annual Christmas market, where his spices were met with overwhelming praise. Customers were impressed by the quality, aroma, and unique offerings of Zain Spices, including his traditional Palestinian blends like Gazawi Dukka and Za’atar.
        A Growing Business with Big Dreams
  
        Since joining SafeGrow, Abdelrahman has scaled production and expanded his customer base, reaching individuals who appreciate the craftsmanship and heritage behind his products. Zain Spices now boasts an impressive lineup of 36 blends, including innovative creations like Thai Spice, Masala Spice, Seven Spices, Fish Seasoning, Healthy Indomie, and more.
        Abdelrahman dreams of growing his business further and hiring a team of displaced Palestinians, offering them an opportunity to rebuild their lives through meaningful work. His story is one of perseverance, cultural pride, and a steadfast commitment to supporting others in his community.
        Building the Future, One Spice at a Time
        Through Zain Spices, Abdelrahman has not only reclaimed his livelihood but also created a bridge between his heritage and his future. His work stands as a testament to the power of resilience and the profound impact of SafeGrow’s mission to empower displaced Palestinians.
        `,  
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
        fullStory: `
        "Rama Kitchen" is named after Maha’s beloved daughter, Rama, who tragically passed away in December 2024 after battling a complex medical condition. Maha, a young mother, was evacuated from Gaza by SafeGrow’s sister organization, SafeBow, along with her two daughters when the situation became unbearable. During their evacuation, we learned of the immense challenges they faced—particularly in securing the special dietary foods that her daughter needed, as well as the overwhelming struggles of living in a warzone with limited aid.

        Despite the heartbreaking loss of Rama, Maha's determination to stay strong for her surviving daughter led her to start Rama Kitchen, a business dedicated to sharing Palestinian culinary traditions. With SafeGrow’s support, Maha received a fully stocked list of kitchen appliances, large pots, pans, and other essentials needed to launch her business. Our team also helped grow her presence online, boosting her Instagram following to over 600 (@rama_kitchen_eg).

        Rama Kitchen offers a range of delicious, homemade Palestinian meals, including maqlouba, gazawi fatta, kabsa, maftoul, musakhan, and a personal favorite: chicken stuffed with rice, nuts, and raisins. Each dish is crafted with love, respect for tradition, and a passion for authentic flavors.

        However, Maha continues to face challenges in establishing a stable and consistent customer base. While she works tirelessly to build her brand, the feedback from those who have tasted her dishes is overwhelmingly positive. Customers are in awe of the depth of flavor and the authenticity of her meals, which has made Rama Kitchen a beloved experience for those lucky enough to try it.

        Starting this business has provided Maha with both a purpose and an outlet to heal. The kitchen not only honors the memory of her daughter, but it also allows her to stay strong and resilient for her remaining daughter. Maha’s dream is to grow her business, expand her menu, and eventually hire other displaced individuals to help them regain their livelihoods.

        Through the support of SafeGrow and its partners, Maha is on the path to rebuilding and creating a sustainable future. Rama Kitchen stands as a testament to her strength, love, and the unbreakable bond she shares with her daughter’s memory.
        `,
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
        fullStory: `
        The name Raw'a means "wonderful" or "fantastic" in traditional Arabic—a fitting tribute to Bilal’s dream of rebuilding the successful family business he once had in Gaza. Before the genocide, Bilal and his brother had established a thriving furniture business in Gaza, renowned for its high-quality craftsmanship and custom-made pieces. With a showroom, a full-scale production facility, and 30 employees, Raw'a was one of the most sought-after furniture shops in Gaza, with a waitlist during peak seasons for their unique, high-end creations.

        Bilal’s passion for woodworking and his attention to detail made Raw'a stand out in the competitive market, and his vision was to bring beauty and functionality into people's homes. But in the midst of the genocide, Bilal lost everything. His business was destroyed, and he faced the tragic loss of many close friends and family. One heartbreaking day, while Bilal was resting in a friend's home, that very home was bombed. Everyone inside, including the brother of his wife, perished. Bilal himself was put into a coma. After recovering, SafeGrow knew we had to act quickly to evacuate him to safety. Through our sister organization, SafeBow, Bilal, his wife, and their young daughter—born just three days before the genocide started—were safely brought to Egypt.

        Bilal's resilience and determination were evident from the start. He immediately began rebuilding his business in Cairo, leveraging his skills in woodworking and upholstery. With Raw'a, Bilal aims to rebuild not just his business but also the future he dreams of for his family. His ultimate goal is to hire a team of talented workers, create a line of ready-to-buy furniture, and return to his legacy of delivering high-quality, custom furniture.

        When SafeGrow started this project with Bilal, we provided critical support by securing a large working space for him to create his furniture. We covered his first three months of rent and supplied the necessary machinery for both furniture making and upholstery. Just weeks after starting his business in Cairo, Bilal sold his first product—a stunning dining table.
        
        Bilal’s work has already begun to garner attention for its exquisite craftsmanship, and with your help, we are confident that Raw'a will thrive once again. By supporting Bilal, buying his products, and spreading the word, you’re helping to rebuild a dream and create a future for his family and the community he seeks to support through his work.
        `,
        impact: [
            "Created employment for 8 individuals",
            "Rebuilt a sustainable furniture business",
            "Preserved traditional craftsmanship",
            "Contributed to the local economy"
        ],
        quote:
            "SafeGrow didn't just help me restart my business; they helped me rebuild my dignity and purpose.",
        img: "/iloveimg-converted/4.jpg",
        gallery: ["/iloveimg-converted/roaa1.jpeg", "/iloveimg-converted/roaa2.jpeg", "/iloveimg-converted/roaa3.jpeg", "/iloveimg-converted/roaa4.jpeg", "/iloveimg-converted/roaa5.jpeg", "/iloveimg-converted/4.jpg", "/iloveimg-converted/7.jpg"],
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
                        className="lg:col-span-2 space-y-8 max-h-72 overflow-scroll"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        {story.fullStory.split('\n').map((paragraph, index) => (
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

                {/* Action Srction */}
                <StoryActions />


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