'use client';
import React from "react";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import Image from 'next/image';
import foto1 from '../../../public/assets/Apple-Logosu.png';
import foto2 from '../../../public/assets/Beats_Electronics_logo.svg.png';
import foto3 from '../../../public/assets/Dell_Logo.svg.png';
import foto4 from '../../../public/assets/bosch.jpg';
import foto5 from '../../../public/assets/images.png';

import styled from 'styled-components';

const sponsors = [
    { id: 1, name: "Apple", logoUrl:[foto1]  },
    { id: 2, name: "Beats", logoUrl: [foto2] },
    { id: 3, name: "Dell", logoUrl: [foto3]},
    { id: 4, name: "Bosch", logoUrl:[foto4] },
    { id: 5, name: "Adidas", logoUrl:[foto5] },

    { id: 1, name: "Apple", logoUrl:[foto1]  },
    { id: 2, name: "Beats", logoUrl: [foto2] },
    { id: 3, name: "Dell", logoUrl: [foto3]},
    { id: 4, name: "Bosch", logoUrl:[foto4] },
    { id: 5, name: "Adidas", logoUrl:[foto5] },
];

const SponsorContainer = styled.div`
    padding: 80px; /* Hapësirë e brendshme e konteinerit */
    display: flex;
    flex-direction: row;
    background-color: none; /* Ngjyra e sfondit të kartës */
    margin-bottom:250px;


`;

const SponsorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px; /* Hapësirë horizontale midis kartave */
  padding: 50px; /* Hapësirë e brendshme e kartës */
  border: 1px solid #ddd; /* Kufiri i kartës */
  border-radius: 8px; /* Rrethi i kartës */
  background-color: inherit; /* Ngjyra e sfondit të kartës */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Efekti i hijes së kartës */
`;

const SponsorImage = styled(Image)`
  border-radius: 20%; /* Forma e rrumbullakët e figurës */
`;

const SponzorPage: React.FC = () => {
    const [similarProducts, setSimilarProducts] = useState<Array<any>>([]);

    const ShowSimilarProduct: React.FC = () => (
        <SponsorContainer>
            {similarProducts.map((item, index) => (
                <SponsorCard key={item.id}>
                    <SponsorImage
                        className="card-img-top p-8"
                        src={item.logoUrl[0]}
                        alt="Card"
                        height={200}
                        width={290}
                        priority // Prioritet
                    />

                </SponsorCard>
            ))}
        </SponsorContainer>
    );

    React.useEffect(() => {
        setSimilarProducts([...sponsors]);
    }, []);

    return (
        <div>
            <Marquee
                pauseOnHover={false} // Nuk ndalet kur kalon mbi
                pauseOnClick={true} // Ndalon kur klikohet
                direction="left" // Drejtimi
                gradient={false} // Nuk ka gradient
                speed={150} // Shpejtësia (px/s)
                delay={0} // Vonesa (s)
                loop={0} // Numri i përsëritjeve
                // gradientColor={[248, 251, 253]} // Ngjyra e gradientit (rgb)
                gradientWidth={200}
            >
                <ShowSimilarProduct />
            </Marquee>
        </div>
    );
};

export default SponzorPage;