import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-zinc-100 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col  px-16 bg-yellow-50  dark:bg-black sm:items-start">
      <h1 className="py-5">About Us</h1>
     <p className="pb-2">
    At our Wildlife Center, we believe every creature deserves a safe place to thrive. Founded with a passion for protecting nature, we are dedicated to rescuing animals, restoring habitats, and inspiring communities to care for the world we share. Press the toad of wisdom and he will guide you to more information on our animals.
     </p>
            <div className ="flex flex-col sm:flex-row gap-3 border border-solid border-green-600 rounded-xl p-2 bg-green-100" >
        
        <a className="block" href="/kids">
        <Image
       className="rounded-xl"
          src = "/images/toad2.webP"
          alt ="picture of toad"
          width={350}
          height={300}
          priority
        />
        </a>
    </div> 
    <h3 className="font-bold pt-4">Our Mission</h3>
    <p className="pt-1">To safeguard wildlife through conservation, education, and community involvement.</p>
    <h3 className="font-bold pt-4">Our Team</h3>
    <p className="pt-1">Dedicated caretakers, scientists, and volunteers who bring passion and expertise to protecting endangered species.</p>
    <h3 className="font-bold pt-4">Our Vision</h3>
    <p className="pt-1">A future where animals and people live together in harmony, with thriving ecosystems across Britain.</p>
     
     
     
      </main>
    </div>
  );
}
