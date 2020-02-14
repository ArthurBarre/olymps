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
    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $typeData = file_get_contents('http://localhost:8000/data-properties.json');
        $infra = file_get_contents('http://localhost:8000/data.json');
        $types = file_get_contents('http://localhost:8000/data-types.json');
        $joint = file_get_contents('http://localhost:8000/joint-data.json');
        $districts = file_get_contents('http://localhost:8000/district.json');

        $districtsJson = json_decode($districts, true);
        $typeDataJson = json_decode($typeData, true);
        $json = json_decode($infra, true);
        $json2 = json_decode($types, true);
        $joint2 = json_decode($joint, true);

        for ($i = 0; $i < count($json); $i++) {
            $paris_start = 750;
            $district = $districtsJson[$i];
//            $testDistrict = substr($district, 2, 1);
//            dd($testDistrict);
//            $paris_end = substr($district, 3, 2);
            $loc = new Location();
            $loc->setLat($json[$i]['lat']);
            $loc->setLng($json[$i]['long']);
            $loc->setName($json[$i]['equnom']);
            $loc->setTypes($json2[$i]['types']);
            if (is_null($district)) {
                $loc->setDistrict(75013);
            }
            else {
                $paris_end = substr($district, 3, 2);
                $goodDistrict = $paris_start .$paris_end;
                $loc->setDistrict(intval($goodDistrict));
            }
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

