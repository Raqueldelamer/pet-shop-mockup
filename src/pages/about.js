import PetBottomLayer from "@/components/PetBottomLayer";
import PetHeaderLogo from '../components/PetHeaderLogo';
import PetHeaderMenu from '../components/PetHeaderMenu';

// TODO: create a new page component based on the bottom half of the design in public/mockups/home.png
export default function AboutPage() {
    return (

    <div className="bg-rose-500">
    <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
        
            <PetHeaderLogo logoSrc="/img/paw-face-sm.png" brandName="FindAFurFriend" />
            <PetHeaderMenu menuItems={["Home", "About FindAFurFriend", "Available Pets", "Pricing", "Contact"]} />
        </div>

        <div className="bg-rose-500 p-4 text-2xl font-bold text-white ">
            About FindAFurFriend:
            <br />
            <PetBottomLayer src="/img/pet-app-layers-bottom.jpg" />
        </div>
    </div>
    </div>
        
        
    );
}
// I created one component: PetBottomLayer that has an About.js FindAFurFriend site detail jpg that I designed
// in photoshop that is in the img folder. The stories.jsx & js are in the component folder. 

// I created a PetBottomLayer.stories for the component in the src/components folder using storybook.

// Optional: include the "Header from the Home page" at the top of the About page