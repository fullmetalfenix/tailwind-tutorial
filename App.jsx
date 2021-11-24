import React from "react";
import destinations from "./destinations";

export default function App(){
    return (
        <React.Fragment>
        <div className="grid lg:grid-cols-2 bg-gray-100 2xl:grid-cols-5">
        <div className="p-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
            <div className="xl:max-w-xl">
                <img className="h-20" src="./logoipsum-logo-6.svg" alt="logoipsum fake logo" />
                <img src="./nasa.jpg"
                    className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                    alt="photo of space with earth lit up by electric lights" />
                <h1 className="mt-6 text-2xl font-bold text-gray-800 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">You can
                    work from anywhere.
                    <br className="hidden lg:inline" /> <span className="text-indigo-500">Take advantage of it.</span>
                </h1>
                <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                    Hypotheses direct mailing stealth. Niche market A/B testing venture buzz supply chain hackathon
                    gamification iPhone seed money product management innovator founders equity.
                </p>
                <div className="mt-6 sm:mt-6">
                    <a href=""
                        className="btn btn-primary hover:-translate-y-0.5 transform transition shadow-lg">
                        Book your escape
                    </a>
                    <a className="btn btn-secondary btn-primary hover:-translate-y-0.5 transform transition ml-2">Learn More</a>

                </div>
            </div>

        </div>

        <div className="hidden relative lg:block 2xl:col-span-3">
            <img src="./nasa.jpg" className="absolute inset-0 w-full h-full object-cover object-center"
                alt="photo of space with earth lit up by electric lights" />

        </div>

    </div>
    <div>
        {destinations.map(destination => (
            <div key={destination.planet} className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mx-10 my-10" >
                <img className="h-32 w-32 flex-shrink-0" src={destination.imageUrl} alt={destination.imageAlt} />
                <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-800">{destination.planet}</h3>
                    <p className="text-gray-600">{destination.averagePrice} / night average</p>
                    <div className="mt-4">
                        <a className="text-indigo-500 hover:text-indego-400 font-semibold text-sm">
                            Explore {destination.propertyCount} properties.
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </React.Fragment>
    )
}