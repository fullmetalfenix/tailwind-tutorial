import React from "react";
import destinations from "./destinations";
import DestinationCard from "./components/DestinationCard";

export default function App(){
    return (
        <React.Fragment>
        <div className="grid lg:grid-cols-2 bg-gray-100 2xl:grid-cols-5">
        <div className="p-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
            <div className="xl:max-w-xl">
                <img className="h-20" src="./src/logoipsum-logo-6.svg" alt="logoipsum fake logo" />
                <img src="./src/nasa.jpg"
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
            <img src="./src/nasa.jpg" className="absolute inset-0 w-full h-full object-cover object-center"
                alt="photo of space with earth lit up by electric lights" />
        </div>
    </div>

    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly planets with lots to see and explore.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {destinations.map(destination => (
        <DestinationCard destination={destination} key={destination.planet}/>
    ))}

        </div>
    </div>
    </React.Fragment>
    )
}