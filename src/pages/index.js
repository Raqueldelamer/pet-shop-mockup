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
          <PetHeaderMenu menuItems={["Home", "About the App", "Available Animals", "About FindAFriend", "Contact"]} />
        </div>
        
        <main className="mt-10 flex">
          <section className="w-1/2">
            <PetCounter images={["/img/dog-mini-1.png", "/img/cat-mini-1.png", "/img/dog-mini-2.png", "/img/cat-mini-2.png"]} numberOfPets={505} />
          </section>
          
          <section className="p-2 ">
            <PetHeroImage src="/img/hero-dog.png" />
            <PetCallToAction ctaText="Access Now"/>
          </section>
        </main>
          
        <div className= "w-1/2 flex-col">
          <h1 className="text-5xl text-white mr-2 font-serif font-extrabold ">
          <PetHeroText title="Bring happiness to your home" />
          </h1>
          <PetHeroText description="Find the ideal pet for your lifestyle" />
          
        <div className="flex-col justify-center size-90">
            <img src="/img/pet-app-bottom-layer.jpg" alt="Pet App Layers" />
          </div>
        </div>  
      </div>
      </div>
      
    
    
  );
}