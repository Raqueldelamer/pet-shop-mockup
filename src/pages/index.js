import PetHeaderLogo from '../components/PetHeaderLogo';
import PetHeaderMenu from '../components/PetHeaderMenu';
import PetCounter from '../components/PetCounter';
import PetHeroImage from '../components/PetHeroImage';
import PetCallToAction from '../components/PetCallToAction';
import PetHeroText from '../components/PetHeroText'; 

export default function Home() {

  return (
    <div className="bg-rose-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          <PetHeaderLogo logoSrc="/img/paw-face-sm.png" brandName="FindAFurFriend" />
          <PetHeaderMenu menuItems={["Home", "About FindAFurFriend", "Available Pets", "Pricing", "Contact"]} />
        </div>
        
        <main className="mt-2 flex">
          <section className="w-1/2">
            <PetCounter images={["/img/dog-mini-1.png", "/img/cat-mini-1.png", "/img/dog-mini-2.png", "/img/cat-mini-2.png"]} numberOfPets={505} />
            <h1 className="p-2 text-5xl text-white mt-16 font-serif font-extrabold ">
            <PetHeroText title="Bring happiness to your home!" />
            </h1>
            <PetHeroText description="Find the ideal pet for your lifestyle" />
          </section>
        
          <section className="p-3 mt-4 flex-auto">
            <PetHeroImage src="/img/hero-dog.png" />
            <PetCallToAction ctaText="Access Now"/>
          </section>
          </main> 
          
          <div className="flex-col justify-center">
            <img src="/img/pet-app-layers-bottom.jpg" alt="Pet App Layers" />
          </div>
        </div>  
      </div>
      
    
    
  );
}