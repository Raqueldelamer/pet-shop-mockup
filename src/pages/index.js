import PetHeaderLogo from '../components/PetHeaderLogo';
import PetHeaderMenu from '../components/PetHeaderMenu';
import PetCounter from '../components/PetCounter';
import PetHeroImage from '../components/PetHeroImage';
import PetCallToAction from '../components/PetCallToAction';

export default function Home() {

  return (
    <div className="bg-rose-500">
      <div class="container mx-auto px-4">
        <div className="flex justify-around py-3">
          <PetHeaderLogo logoSrc="/img/paw-face-sm.png" brandName="FindAFurFriend" />
          <PetHeaderMenu menuItems={["Home", "About the App", "Available Animals", "About FindAFriend", "Contact"]} />
        </div>
        <main className="mt-10 flex">
          <section className="w-1/2">
            <PetCounter images={["/img/dog-mini-1.png", "/img/cat-mini-1.png", "/img/dog-mini-2.png", "/img/cat-mini-2.png"]} numberOfPets={505} />
          </section>
          <section className="w-1/2 flex flex-col">
            <PetHeroImage src="/img/hero-dog.png" />
            <PetCallToAction ctaText="Access Now"/>
          </section>

        </main>
        <div>
        <h1 className="text-4xl text-white mt-8 font-serif font-extrabold ">
          Bring Happiness to Your Home
        </h1><br /><br />
        <p className='font-serif text-2xl text-white font-bold'>
          Find the ideal pet for your life style
        </p>
        <p>
          When complete, work on the bottom (white) part of the image. Create a new page for it at `about.js`. Add the components you need to create the page. Test them. Make sure they are working as expected. Then, add them to the new page. (Be sure to use PropTypes so storybook can help you test your components.)
        </p>
        <div className="flex ">
          <img src="/img/pet-app-bottom-layer.jpg" alt="Pet App Layers" />
        </div>
      </div>
      </div>
    </div>
  );
}