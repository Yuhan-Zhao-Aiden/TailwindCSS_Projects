import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
    return (
        <section className="max-container flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
            <div className="flex">
                <img
                    src={offer}
                    alt="offer-image"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>
            <div className="flex flex-col">
                <h1 className=" text-4xl font-palanquin font-bold">
                    <span className="text-coral-red">Special</span> Offer
                </h1>
                <p className="mt-4 font-montserrat text-slate-600 ">
                    Embark on a shopping journey that redefines your
                    experience with unbeatable deals. From premier
                    selections to incredible savings, we offer unparalleled
                    value that sets us apart.
                </p>
                <p className="mt-8 font-montserrat text-slate-600">
                    Navigate a realm of possiblities designed to fulfill
                    your unique desires, surpassing the loftiest
                    expectations. Your journey with us is noting short of
                    exceptional.
                </p>
                <div className="flex gap-8 mt-9">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button
                        label="Learn more"
                        backgroundColor="bg-white"
                        textColor="text-slate-600"
                        borderColor="border-slate-600"
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
