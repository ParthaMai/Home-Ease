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
    Booking_icon
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