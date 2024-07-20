// pages/ApiDocsPage.js

import React from 'react';
import Link from 'next/link';
import BannerAdTwo from './BannerAd';


const baseUrl = 'https://dino-facts.vercel.app';

const ApiDocsPage = () => {
    return (
        <div className="bg-emerald-700 min-h-screen pt-8 flex flex-col">
            <div className="container mx-auto flex flex-col">
                <div className="max-w-3xl mx-auto flex flex-col w-full px-2">
                    <h1 className="text-3xl font-bold text-white mb-4 text-center">Dino API Documentation</h1>
                    <p className="text-lg text-white mb-8 text-center">Explore the endpoints available in the Dino API.</p>

                    <section className="mb-8 flex flex-col space-y-4">
                        <h2 className="text-2xl font-semibold text-white mb-4">Endpoints</h2>

                        {/* Filter by class */}
                        <div className="bg-gray-800 p-4 rounded-md mb-4 flex flex-col overflow-x-auto">
                            <h3 className="text-lg font-medium text-white mb-2 flex-shrink-0 break-words">
                                GET {baseUrl}/api/dinosaurs/class/:className
                            </h3>
                            <p className="text-gray-300 mb-2">Fetches dinosaurs by class.</p>
                            <pre className="bg-gray-600 p-2 rounded-md overflow-x-auto max-w-full">
                                <code className="text-gray-200">
                                    {`curl ${baseUrl}/api/dinosaurs/class/sauropods`}
                                </code>
                            </pre>
                        </div>

                        {/* Filter by family */}
                        <div className="bg-gray-800 p-4 rounded-md mb-4 flex flex-col overflow-x-auto">
                            <h3 className="text-lg font-medium text-white mb-2 flex-shrink-0 break-words">
                                GET {baseUrl}/api/dinosaurs/family/:familyName
                            </h3>
                            <p className="text-gray-300 mb-2">Fetches dinosaurs by family.</p>
                            <pre className="bg-gray-600 p-2 rounded-md overflow-x-auto max-w-full">
                                <code className="text-gray-200">
                                    {`curl ${baseUrl}/api/dinosaurs/family/tyrannosauridae`}
                                </code>
                            </pre>
                        </div>

                        {/* Filter by region */}
                        <div className="bg-gray-800 p-4 rounded-md mb-4 flex flex-col overflow-x-auto">
                            <h3 className="text-lg font-medium text-white mb-2 flex-shrink-0 break-words">
                                GET {baseUrl}/api/dinosaurs/region/:regionName
                            </h3>
                            <p className="text-gray-300 mb-2">Fetches dinosaurs by region.</p>
                            <pre className="bg-gray-600 p-2 rounded-md overflow-x-auto max-w-full">
                                <code className="text-gray-200">
                                    {`curl ${baseUrl}/api/dinosaurs/region/colorado`}
                                </code>
                            </pre>
                        </div>

                        {/* Filter by type */}
                        <div className="bg-gray-800 p-4 rounded-md mb-4 flex flex-col overflow-x-auto">
                            <h3 className="text-lg font-medium text-white mb-2 flex-shrink-0 break-words">
                                GET {baseUrl}/api/dinosaurs/type/:typeName
                            </h3>
                            <p className="text-gray-300 mb-2">Fetches dinosaurs by type.</p>
                            <pre className="bg-gray-600 p-2 rounded-md overflow-x-auto max-w-full">
                                <code className="text-gray-200">
                                    {`curl ${baseUrl}/api/dinosaurs/type/carnivore`}
                                </code>
                            </pre>
                        </div>

                        {/* Filter by diet */}
                        <div className="bg-gray-800 p-4 rounded-md mb-4 flex flex-col overflow-x-auto">
                            <h3 className="text-lg font-medium text-white mb-2 flex-shrink-0 break-words">
                                GET {baseUrl}/api/dinosaurs/diet/:dietType
                            </h3>
                            <p className="text-gray-300 mb-2">Fetches dinosaurs by diet.</p>
                            <pre className="bg-gray-600 p-2 rounded-md overflow-x-auto max-w-full">
                                <code className="text-gray-200">
                                    {`curl ${baseUrl}/api/dinosaurs/diet/herbivore`}
                                </code>
                            </pre>
                        </div>

                        {/* Filter by name */}
                        <div className="bg-gray-800 p-4 rounded-md mb-4 flex flex-col overflow-x-auto">
                            <h3 className="text-lg font-medium text-white mb-2 flex-shrink-0 break-words">
                                GET {baseUrl}/api/dinosaurs/name/:dinoName
                            </h3>
                            <p className="text-gray-300 mb-2">Fetches dinosaurs by name.</p>
                            <pre className="bg-gray-600 p-2 rounded-md overflow-x-auto max-w-full">
                                <code className="text-gray-200">
                                    {`curl ${baseUrl}/api/dinosaurs/name/tyrannosaurus`}
                                </code>
                            </pre>
                        </div>
                    </section>
                </div>
            </div>
            <footer data-testid="footer" className="mb-24 bg-neutral-50 border-t border-gray-300 text-gray-800 w-full">
                <div className='pt-5 text-center'>
                    <Link href="/" className="text-xl hover:text-emerald-600  transition duration-300 px-2">
                        Home
                    </Link>
                </div>
                <div className='py-5 text-center'>
                    <Link href="https://www.kaggle.com/datasets/smruthiiii/dinosaur-dataset" className="text-xl hover:text-emerald-600  transition duration-300 px-2">
                        Dataset
                    </Link>
                </div>
                <div className="flex justify-center space-x-4 py-6">
                    <a data-testid="linkedin" href="https://blog.hookerhillstudios.com/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-emerald-600  transition duration-300 px-2">
                        <i className="fa fa-newspaper"></i>
                    </a>
                    <a href="https://play.google.com/store/apps/dev?id=4957396816342892948&hl=en_US" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-emerald-600  transition duration-300 px-2">
                        <i className="fa-brands fa-google-play"></i>
                    </a>
                    <a data-testid="youtube" href="https://www.youtube.com/@hookerhillstudios" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-emerald-600  transition duration-300 px-2">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <div className="text-center text-lg md:text-2xl py-4">
                    <p className="flex flex-col">
                        <a href="mailto:hookerhillstudios@gmail.com" className=" hover:text-emerald-600 transition duration-300">hookerhillstudios@gmail.com</a>
                        <a href="https://www.hookerhillstudios.com" className=" hover:text-emerald-600 transition duration-300">www.hookerhillstudios.com</a>
                    </p>
                </div>
                <div className="text-center text-lg md:text-2xl py-4 w-full">
                    <img className='mx-auto rounded-lg' width={300} src="https://www.hookerhillstudios.com/images/Logo-Blue.png" alt="dino" />
                    <p className="pt-4">&copy; 2024 Hooker Hill Studios</p>
                </div>
            </footer>
            <BannerAdTwo />
        </div>
    );
};

export default ApiDocsPage;
