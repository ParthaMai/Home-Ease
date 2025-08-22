import app_store from './app_store.png'
import beauty from './beauty.png'
import carpenter from './carpenter.png'
import Cleaning from './Cleaning.png'
import cooking from './cooking.png'
import cross_icon from './cross_icon.png'
import Driver from './Driver.png'
import Electrician from './Electrician.png'
import facebook_icon from './facebook_icon.png'
import Laundry from './Laundry.png'
import linkedin_icon from './Linkedin_icon.png'
import logout_icon from './logout_icon.png'
import Painter from './Painter.png'
import play_store from './play_store.png'
import Plumber from './Plumber.png'
import profile_icon from './profile_icon.png'
import rating_starts from './rating_starts.png'
import search_icon from './search_icon.png'
import Shifting from './Shifting.png'
import Technician from './Technician.png'
import twitter_icon from './twitter_icon.png'
import Welder from './Welder.png'
import header_img from './header_img.png'
import logo from './logo.png'
import Booking_icon from './Booking_icon.png'
import HomeDeepCleaning from './HomeDeepCleaning.png'
import sofaCleaning from './sofaCleaning.png'
import bathroomCleaning from './bathroomCleaning.png'
import KitchenCleaning from './KitchenCleaning.png'
import OfficeCleaning from './OfficeCleaning.png'
import ShopCleaning from './ShopCleaning.png'
import bedroomCleaning from './bedroomCleaning.png'
import SanitizationCleaning from './SanitizationCleaning.png'
import HomeChef from './HomeChef.png'
import TiffinChef from './TiffinChef.png'
import PartyCooking from './PartyCooking.png'
import BakingChef from './BakingChef.png'
import add_icon_white from './add_icon_white.png'
import MensHaircut from './MensHaircut.png'
import WomenHairCut from './WomenHairCut.png'
import predicure from './predicure.png'
import Skincare from './Skincare.png'
import Makeup from './Makeup.png'
import Massage from './Massage.png'
import Fitness from './Fitness.png'
import Yoga from './Yoga.png'
import Ac from './Ac.png'
import fridge from './fridge.png'
import TV from './Tv.png'
import Washing from './Washing.png'
import Ro from './RO.png'
import Chimney from './Chimney.png'
import Hammer from './hammer.png'



export const assets = {
    app_store,
    cross_icon,
    facebook_icon,
    linkedin_icon,
    logout_icon,
    play_store,
    profile_icon,
    rating_starts,
    search_icon,
    twitter_icon,
    header_img,
    logo,
    Booking_icon,
    add_icon_white
}

export const service_list =[
    {
        _id: "1",
        name: "Cleaning",
        image: Cleaning,
        description: "Cleaning services ensure a spotless and healthy home environment with expert care and attention to detail."
    },
    {
        _id: "2",
        name: "Cooking",
        image: cooking,
        description: "Cooking services bring delicious, homemade meals to your kitchen, saving you time without compromising on taste."
    },
    {
        _id:"3",
        name:"Beauty",
        image:beauty,
        description:"Skincare and salon services that bring expert beauty care to your doorstep—convenient, relaxing, and personalized"
    },
    {
        _id:"4",
        name:"Laundry",
        image:Laundry,
        description:"Professional laundry services that keep your clothes fresh, clean, and hassle-free."
    },
    {
        _id:"5",
        name:"Technician",
        image: Technician,
        description:"Certified technicians for reliable repair and maintenance of home appliances and electronics."
    },
    {
        _id:"6",
        name:"Carpenter",
        image: carpenter,
        description:"Expert carpenters for all your furniture fixes and woodwork needs, delivered to your doorstep"
    },
    {
        _id:"7",
        name:"Electrician",
        image: Electrician,
        description:"Trusted electrician services for safe, efficient repairs and installations—right at your home."
    },
    {
        _id:"8",
        name:"Plumber",
        image:Plumber,
        description:"Expert plumbing services for leaks, fittings, and repairs—quick, clean, and reliable."
    },
    {
        _id:"9",
        name:"Welder",
        image: Welder,
        description:"Skilled welding services for gates, grills, frames, and more—safe, strong, and reliable."
    },
    {
        _id:"10",
        name:"Pinter",
        image: Painter,
        description:"Professional painting services for homes and offices—clean finish, vibrant results."
    },
    {
        _id:"11",
        name:"Driver",
        image: Driver,
        description:"Trained and reliable drivers for your daily travel or outstation trips—safe and punctual."
    },
    {
        _id:"12",
        name:"Shifting",
        image: Shifting,
        description:"Safe and hassle-free shifting services for homes and offices—handled with care by experts."
    }
]
export const cleaning_list =[
    {
        _id:"1",
        name:"Home Deep Cleaning",
        image: HomeDeepCleaning,
        price: 1500,
        description: "A comprehensive cleaning of the entire house including bathrooms, kitchen, bedrooms, and living areas.",
        features: [
        "Includes-",
        "Floor scrubbing",
        "Bathroom sanitization",
        "Kitchen degreasing",
        "Dusting of furniture, fans, and windows"
        ]
    },
    {
        _id:"2",
        name:"Sofa Cleaning",
        image: sofaCleaning,
        price: 400,
        description:"A specialized upholstery cleaning service designed to remove dust, stains, and odors from your sofa, leaving it fresh and hygienic. Ideal for fabric and leather sofas.",
        features:[
        "Includes-",
        "Vacuuming to remove dust and debris",
        "Shampooing and stain removal",
        "Fabric-safe deep cleaning",
        "Drying and deodorization"
        ]
    },
    {
        _id:"3",
        name:"Kitchen Cleaning",
        image: KitchenCleaning,
        price: 600,
        description: "A deep cleaning service tailored to remove tough grease, stains, and dirt from all areas of your kitchen, ensuring a spotless and hygienic cooking space",
        features:[
        "Includes-",
        "Degreasing of stove, chimney, and backsplash",
        "Cleaning of countertops and cabinets",
        "Sink and tile scrubbing",
        "Floor mopping "
        ]
    },
    {
        _id:"4",
        name:"Bathroom Cleaning",
        image: bathroomCleaning,
        price: 700,
        description:"A thorough cleaning and sanitization service for your bathroom to eliminate stains, odors, and germs, leaving the space fresh, sparkling, and hygienic.",
        features:[
        "Includes-",
        "Toilet and washbasin cleaning",
        "Floor and wall tile scrubbing",
        "Removal of hard water stains",
        "Disinfection of taps, shower, and fixtures"
        ]
    },
    {
        _id:"5",
        name:"Bedroom Cleaning",
        image: bedroomCleaning,
        price: 300,
        description: "A dedicated bedroom cleaning service focused on removing dust, dirt, and allergens, leaving your space fresh, sanitized, and restful.",
        features: [
            "Dusting of furniture, fans, and décor",
            "Floor sweeping, mopping, and vacuuming",
            "Cleaning under the bed and corners",
            "Mattress vacuuming and deodorization",
            "Mirror and window cleaning",
        ]
    },
    {
        _id:"6",
        name:"Office Cleaning",
        image: OfficeCleaning,
        price: 700,
        description: "A professional office cleaning service to maintain a clean, organized, and productive workplace by eliminating dust, dirt, and germs.",
        features: [
            "Dusting of desks, chairs, and workstations",
            "Cleaning of electronic equipment (monitors, keyboards, phones)",
            "Vacuuming and mopping of floors",
            "Glass door and window cleaning",
        ]
    },
    {
        _id:"7",
        name:"Shop Cleaning",
        image: ShopCleaning,
        price: 600,
        description: "A tailored cleaning service for retail spaces to ensure a clean, attractive, and hygienic shopping environment for your customers.",
        features: [
            "Sweeping and mopping of floors",
            "Dusting of shelves, counters, and display units",
            "Glass door and window cleaning",
            "Trash collection and disposal",
        ]
    },
    {
        _id:"8",
        name:"Sanitization Cleaning",
        image: SanitizationCleaning,
        price: 1200,
        description: "A high-level cleaning service focused on eliminating viruses, bacteria, and harmful microbes to ensure a safe and hygienic environment.",
        features: [
            "Disinfection of frequently touched surfaces",
            "Spray and wipe sanitization for all rooms",
            "Sanitization of door handles, switches, remotes, etc.",
            "Airborne germ control using misting/fogging (optional)",
            "Safe for homes, offices, and commercial spaces"
        ]
    }
]
export const cooking_list =[
    {
        _id:"1",
        name:"Home Chef Service",
        image:HomeChef,
        price: "600-800",
        description: "Enjoy delicious meals cooked fresh in your own kitchen by a professional chef, tailored to your taste, schedule, and dietary preferences.",
        features: [
            "Experienced chefs at your home",
            "Customized meal planning and cooking",
            "Optional grocery shopping by chef",
            "Post-cooking kitchen cleanup"
        ]
    },
    {
        _id:"2",
        name:"Tiffin/Meal Preparation",
        image: TiffinChef,
        price: "200-300",
        description: "Convenient home-style tiffin and meal preparation service designed for working professionals, students, and families seeking nutritious daily food.",
        features: [
            "Customized meal plans (veg/non-veg)",
            "Daily, weekly, or monthly options",
            "Balanced and hygienic home-cooked meals",
            "Timely preparation and packaging",
        ]
    },
    {
        _id:"3",
        name:"Party/Event Cooking",
        image: PartyCooking,
        price: "2000-4000",
        description: "Professional cooking service for house parties, family gatherings, and special events—ensuring your guests enjoy delicious, freshly prepared meals without the hassle.",
        features: [
            "Customizable menu based on event type",
            "Multi-cuisine options (Indian, Chinese, Continental, etc.)",
            "On-site cooking or pre-cooked meal delivery",
            "Trained chefs and assistants for large gatherings",   
        ]
    },
    {
        _id:"4",
        name:"Baking Services",
        image: BakingChef,
        price: "200-400",
        description: "Delight in freshly baked treats made right in your kitchen — perfect for birthdays, celebrations, or everyday cravings.",
        features: [
            "Cakes, cupcakes, cookies, and more",
            "Theme-based custom cakes for occasions",
            "Eggless, vegan, and gluten-free options",
            "Use of fresh, high-quality ingredients"
        ]
    }
]

export const beauty_list =[
    {
        _id: "1",
        name: "Mens Hair Cut",
        image: MensHaircut,
        price: 250,
        description: "Get a fresh, stylish haircut at home tailored to your look — perfect for work, parties, or everyday grooming.",
        features: [
            "Haircut & Styling",
            "Hair Coloring",
            "Hair Spa & Treatment",
            "Bridal & Party Hairstyles"
        ]

    },
    {
        _id: "2",
        name:"Womens Hair Cut",
        image: WomenHairCut,
        price: 350,
        description:"Transform your look with a professional haircut at home — from chic trims to stylish layers, perfect for any occasion or everyday elegance.",
        features: [
            "Haircut & Styling",
            "Hair Coloring",
            "Hair Spa & Treatment",
            "Bridal & Party Hairstyles"
        ]

    },
    {
        _id: "3",
        name: "Nail & Hand/Foot Care",
        image: predicure,
        price : 350,
        description: "Revitalize your hands and feet with soothing manicure and pedicure treatments — perfect for relaxation, grooming, and a polished look.",
        features: [
            "Manicure & Pedicure",
            "Nail Art & Nail Extensions",
            "Gel Polish / Nail Refill"
        ]
    },
    {
        _id: "4",
        name: "Skincare & Facial Treatments",
        image: Skincare,
        price: 400,
        description: "Rejuvenate your skin with professional skincare treatments — designed to cleanse, hydrate, and restore your natural glow at home.",
        features: [
            "Clean-up",
           "Basic Facial (Fruit, Pearl, Gold)",
           "Advanced Facial",
           "Face Bleach",
           "Face Detan"
        ]
    },
    {
        _id: "5",
        name:"Makeup Services",
        image: Makeup,
        price: 600,
        description: "Enhance your beauty with professional makeup artistry — perfect for weddings, parties, photoshoots, or everyday elegance.",
        features: [
            "Party Makeup",
            "Bridal Makeup",
            "Engagement Makeup",
            "Reception Makeup"
        ]
    },
    {
        _id: "6",
        name: "Massage",
        image: Massage,
        price: 1100,
        description: "Relax and rejuvenate with soothing massage therapies at home — designed to relieve stress, improve circulation, and restore balance.",
        features: [
            "Head, Neck & Shoulder Massage",
            "Full Body Massage",
            "Foot Reflexology",
            "Stress Relief"
        ]
    },
    {
        _id: "7",
        name:"Fitness",
        image: Fitness,
        price: 300,
        description: "Achieve your health and fitness goals with personalized training sessions at home — tailored to your body type, lifestyle, and routine."
    },
    {
        _id: "8",
        name: "Yoga",
        image: Yoga,
        price: 300,
        description: "Bring balance to your body and mind with guided yoga sessions at home — designed for fitness, flexibility, and inner peace."
    }
]
export const technicians_list =[
    {
        _id: "1",
        name: "AC Technician",
        image: Ac,
        description: "Keep your air conditioner running at its best with professional installation, repair, and maintenance services — all at your doorstep.",
        features: [
            "AC Installation & Uninstallation",
            "AC Gas Refill & Cooling Check",
            "AC General Service",
            "AC Repair",
            "Others"
        ]
    },
    {
        _id: "2",
        name: "Refrigerator Technician",
        image: fridge,
        description: "Ensure your refrigerator runs smoothly with expert repair and maintenance — from cooling issues to part replacements, all handled at home.",
        features: [
            "Fridge Repair",
            "Cooling Issue Fix",
            "Compressor, Gas Refil",
            "Others"
        ]
    },
    {
        _id: "3",
        name: "TV Technician",
        image : TV,
        description: "Get reliable TV installation, wall mounting, and repair services at home — ensuring clear display, smooth sound, and hassle-free entertainment.",
        features: [
            "LED/LCD TV Installation",
            "Display / Screen Repair",
            "Others"
        ]
    },
    {
        _id: "4",
        name: "Washing Machine Technician",
        image: Washing,
        description: "Keep your laundry hassle-free with expert washing machine repair, installation, and maintenance services — right at your home.",
        features: [
            "Installation & Uninstallation",
            "Front & Top Load Repair",
            "Drum / Motor / Drain Issues",
            "Regular Maintenance & Cleaning",
            "Others"
        ]
    },
    {
        _id: "5",
        name: "Water Purifier Technician",
        image: Ro,
        description: "Ensure safe and clean drinking water with professional RO/UV purifier installation, repair, and maintenance services at your home.",
        features: [
            "Installation & Uninstallation",
            "Filter & membrane replacement",
            "Regular cleaning & maintenance",
            "Repairs for leakage",
            "Others"
        ]
    },
    {
        _id: "6",
        name:"Chimeny Technician",
        image: Chimney,
        description: "Keep your kitchen smoke-free and clean with professional chimney installation, repair, and maintenance services at home.",
        features: [
            "Installation & Uninstallation",
            "Motor, suction, and filter repair",
            "Regular cleaning & maintenance",
            "Fixing noise, leakage",
            "Others"
        ]
    },
    {
        _id: "7",
        name: "Other Technician Services",
        image: Hammer,
        description: "Get professional repair, installation, and maintenance services for all your home appliances — fast, reliable, and at your doorstep.",
        features: [
            "Inverter installation & repair",
            "stabilizer installation & repair",
            "Microwave and oven servicing",
            "Geyser, iron maintenance",
            "Others"
        ]
    }

]