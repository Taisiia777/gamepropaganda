import React from 'react';
import Layout from '../components2/Layout';
import Hero from '../components2/Hero';
import HowItWorks from '../components2/HowItWorks';
import TurkishRegion from '../components2/TurkishRegion';
import PSPlusSection from '../components2/PSPlusSection';
import PSTariffs from '../components2/PSTariffs';
import GameCatalog from '../components2/GameCatalog';
import PlaystationTopUp from '../components2/PlaystationTopUp';
import MonthlyGames from '../components2/MonthlyGames';
import NewGamesInCatalog from '../components2/NewGamesInCatalog';
import Guarantees from '../components2/Guarantees';
import FAQ from '../components2/FAQ';
import Testimonials from '../components2/Testimonials';
import Newsletter from '../components2/Newsletter';

function PsPage() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <TurkishRegion />
      <PSPlusSection />
      <PSTariffs />
      <GameCatalog />
      <PlaystationTopUp />
      <MonthlyGames />
      <NewGamesInCatalog />
      <Guarantees />
      <FAQ />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
}

export default PsPage;