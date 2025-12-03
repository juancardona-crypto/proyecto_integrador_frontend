
import React from 'react';

const IconCheckSquare = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0zM192 128H48c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H368c26.5 0 48-21.5 48-48V320c0-17.7 14.3-32 32-32s32 14.3 32 32v144c0 44.2-35.8 80-80 80H48c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80h96c17.7 0 32 14.3 32 32s-14.3 32-32 32zm0 160H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/></svg>
);
const IconGem = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M112 0H64C28.7 0 0 28.7 0 64V128c0 35.3 28.7 64 64 64H112V0zM192 0H160c-17.7 0-32 14.3-32 32V160c0 17.7 14.3 32 32 32h32V0zM464 0H224V192H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H464zM240 224H56c-22.1 0-40 17.9-40 40V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V264c0-22.1-17.9-40-40-40H400V256c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V224H240z"/></svg>
);
const IconBalanceScale = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v32c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM32 352H416V416H32V352zM416 448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416z"/></svg>
);
const IconStar = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-11.4 1.7-20.3 10.4-22.6 21.3s-.4 23.6 7.6 31.7L140.6 328.7 114.9 476c-1.6 8.5 2.2 16.6 8.7 21.6s15.9 5.2 24.3 3.6L288.1 439.1l111.4 58.4c8.5 4.5 18.5 3.1 24.3-3.6s10.3-13.1 8.7-21.6l-25.7-147.3L524.3 224.5c8.1-8.1 10-19 7.6-31.7s-11.2-19.6-22.6-21.3L381.2 150.3 316.9 18z"/></svg>
);


interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EldenNoirLogo: React.FC = () => (
    <span className="font-serif italic text-3xl md:text-4xl text-rose-950 tracking-wider">
        Elden Noir
    </span>
);


export default function AboutPage() {
    const currentYear = new Date().getFullYear();

    return (
       
        <div className="bg-gray-50 min-h-screen py-16">
     
            <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-white shadow-2xl rounded-xl border border-gray-100">
                
                 
                <header className="flex justify-between items-start mb-16 border-b pb-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                            Nuestra Historia en Elden Noir
                        </h1>
                        <p className="text-lg text-rose-700 italic">
                            "Elegancia atemporal. Calidad en cada detalle."
                        </p>
                    </div>
                   
                    <EldenNoirLogo />
                </header>

 
                <section className="mb-16 grid md:grid-cols-5 gap-8 items-center bg-rose-950 p-10 rounded-xl shadow-lg">
                  
                    <div className="md:col-span-3">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            La Filosofía de Elden Noir
                        </h2>
                        <p className="text-md text-rose-100 space-y-3">
                            <span className="block">
                                Elden Noir nació en 2025 de la visión de crear accesorios que encarnen la sofisticación y la durabilidad. No solo vendemos bolsos; ofrecemos piezas que definen el estilo personal.
                            </span>
                            <span className="block">
                                Cada artículo es seleccionado o diseñado con un enfoque implacable en la calidad de los materiales y la ejecución artesanal.
                            </span>
                        </p>
                    </div>
                    
                   
                    <div className="md:col-span-2 flex justify-center items-center">
 
                        <div className="h-48 w-48 bg-rose-950/20 border-4 border-rose-800 rounded-full flex items-center justify-center p-4">
                            <span className="text-3xl font-bold text-white text-center leading-snug tracking-wider">
                                Elden Noir
                            </span>
                        </div>
                    </div>
                </section>

               
                <section className="mb-16">
    <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-10">
        Nuestros Objetivos Generales
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <ValueCardClaro 
            icon={<IconCheckSquare className="w-6 h-6" />} 
            title="Excelencia en busqueda" 
            description="Elden Noir ofrece uncatalogo amiga y comodo para los clientes." 
        />

        <ValueCardClaro 
            icon={<IconGem className="w-6 h-6" />} 
            title="Elegancia " 
            description="Ofrecer una pagina que sea elegante para los clientes." 
        />

        <ValueCardClaro 
            icon={<IconBalanceScale className="w-6 h-6" />} 
            title="Compromiso Ético" 
            description="Trabajamos con proveedores responsables con el medio ambiente." 
        />

        <ValueCardClaro 
            icon={<IconStar className="w-6 h-6" />} 
            title="Experiencia Premium" 
            description="Buscamos brindar un servicio excepcional que haga sentir al cliente valorado en cada interacción." 
        />

    </div>
</section>

            </div>
        </div>
    );
}

 
const ValueCardClaro: React.FC<ValueCardProps> = ({ icon, title, description }) => (
    
    <div className="group p-6 bg-white border border-gray-200 rounded-xl text-center transition duration-300 shadow-sm hover:shadow-lg hover:border-rose-300">
        
        
        <div className="mx-auto mb-4 h-12 w-12 bg-rose-50 text-rose-950 rounded-full flex items-center justify-center transition duration-300 group-hover:bg-rose-100">
            {icon}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        
       
        <div className="flex justify-center mt-3 space-x-1">
            <span className="block h-1 w-1 bg-rose-950 rounded-full opacity-70"></span>
            <span className="block h-1 w-1 bg-rose-950 rounded-full opacity-40"></span>
            <span className="block h-1 w-1 bg-rose-950 rounded-full opacity-20"></span>
        </div>
    </div>
);