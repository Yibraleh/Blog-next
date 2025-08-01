// app/components/Articles.tsx
'use client'
import Image from 'next/image'
import React from 'react';

export default function Article() {
  return (
    <div className="prose p-4 bg-white rounded shadow">
      
    {/* Hero banner */}
    <div className="w-full h-64 relative mb-6">
      <Image
        src="/nile.jpg"
        alt="Blue Nile River"
        fill
        className="object-cover rounded"
      />
    </div>
      <p>
        The Blue Nile, one of Africa’s most legendary rivers, begins its journey
        at Lake Tana in the Ethiopian highlands and travels over 1,400 kilometers
        before joining the White Nile in Sudan. This river is more than just a
        body of water—it is a lifeline, a source of mystery, power, and history
        for millions of people. Early along its course, the Blue Nile tumbles
        over the spectacular Blue Nile Falls, locally known as Tis Issat,
        meaning "the smoking water." These falls are not only a popular tourist
        destination but also a symbol of Ethiopia’s natural beauty and raw energy.
      </p>
      <p>
        As the river continues its descent, it carves deep gorges and canyons,
        forming some of the most dramatic landscapes in Africa. These steep
        cliffs and fertile banks support diverse ecosystems and communities that
        have thrived for centuries through farming and fishing. The Blue Nile is
        also vital for Ethiopia’s hydropower ambitions, most notably the Grand
        Ethiopian Renaissance Dam (GERD)—Africa’s largest hydroelectric power
        plant. While the dam promises energy and development for Ethiopia, it
        has also stirred regional tensions with downstream countries,
        especially Sudan and Egypt, who depend on the Nile’s flow.
      </p>
      <p>
        Despite the politics, the cultural richness around the Blue Nile remains
        strong. In towns like Bahir Dar, visitors can enjoy peaceful boat rides
        on Lake Tana, explore ancient monasteries on nearby islands, and hike
        to panoramic viewpoints of the falls. The river is not just a natural
        wonder but also a symbol of Ethiopia’s heritage, strength, and
        potential. As the continent evolves, so too does the Blue Nile’s
        role—from a historical trade route to a modern engine of growth and
        diplomacy.
      </p>
    </div>
  );
}

