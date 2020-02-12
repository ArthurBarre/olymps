<?php

namespace App\DataFixtures;
use App\Entity\Infrastructure;
use App\Entity\HandyType;
use App\Entity\Location;
use App\Entity\LocationType;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $typeData = file_get_contents('http://localhost:8000/data-properties.json');
        $infra = file_get_contents('http://localhost:8000/data.json');
        $types = file_get_contents('http://localhost:8000/data-types.json');
        $joint = file_get_contents('http://localhost:8000/joint-data.json');

        $typeDataJson = json_decode($typeData, true);
        $json = json_decode($infra, true);
        $json2 = json_decode($types, true);
        $joint2 = json_decode($joint, true);

        for ($i = 0; $i < count($json); $i++) {
            $loc = new Location();
            $loc->setLat($json[$i]['lat']);
            $loc->setLng($json[$i]['long']);
            $loc->setName($json[$i]['equnom']);
            $manager->persist($loc);
        }

        for ($i = 0; $i < count($typeDataJson); $i++) {
            $loc = new HandyType();
            $loc->setTitle($typeDataJson[$i]['title']);
            $loc->setDescription($typeDataJson[$i]['description']);
            $manager->persist($loc);
        }

        for ($i = 0; $i < count($joint2); $i++) {
            $loc = new LocationType();
            $loc->setIdLoc($joint2[$i]['gym_id']);
            $loc->setIdType($joint2[$i]['property_id']);
            $manager->persist($loc);
        }

        $manager->flush();
    }
}