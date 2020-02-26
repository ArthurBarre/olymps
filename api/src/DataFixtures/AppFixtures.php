<?php

namespace App\DataFixtures;
use App\Entity\BestDistrict;
use App\Entity\Infrastructure;
use App\Entity\HandiType;
use App\Entity\Location;
use App\Entity\LocationType;

use App\Entity\Sports;
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
        $bestDistricts = file_get_contents('http://localhost:8000/count-types.json');
        $sports = file_get_contents('http://localhost:8000/sports.json');
        $sportsEvent = file_get_contents('http://localhost:8000/joinEvents.json');
        $events = file_get_contents('http://localhost:8000/events.json');

        $sportsJson =  json_decode($sports, true);
        $sportsEventJson =  json_decode($sportsEvent, true);
        $eventsJson =  json_decode($events, true);
        $bestDistrictsJson = json_decode($bestDistricts, true);
        $districtsJson = json_decode($districts, true);
        $typeDataJson = json_decode($typeData, true);
        $json = json_decode($infra, true);
        $json2 = json_decode($types, true);
        $joint2 = json_decode($joint, true);

//        for ($i = 0; $i < count($json); $i++) {
//            $paris_start = 750;
//            $district = $districtsJson[$i];
//            $loc = new Location();
//            $loc->setLat($json[$i]['lat']);
//            $loc->setLng($json[$i]['long']);
//            $loc->setNames($json[$i]['equnom']);
//            $loc->setTypes($json2[$i]['types']);
//            if (is_null($district)) {
//                $loc->setDistrict(75013);
//            }
//            else {
//                $paris_end = substr($district, 3, 2);
//                $goodDistrict = $paris_start .$paris_end;
//                $loc->setDistrict(intval($goodDistrict));
//            }
//            $manager->persist($loc);
//        }
//
//        for ($i = 0; $i < count($typeDataJson); $i++) {
//            $loc = new HandiType();
//            $loc->setTitle($typeDataJson[$i]['title']);
//            $loc->setDescription($typeDataJson[$i]['description']);
//            $manager->persist($loc);
//        }
//
//        for ($i = 0; $i < count($bestDistrictsJson); $i++) {
//            $loc = new BestDistrict();
//            $loc->setDistrict($bestDistrictsJson[$i]['value']['district']);
//            $loc->setCount($bestDistrictsJson[$i]['value']['count']);
//            $loc->setMoy($bestDistrictsJson[$i]['value']['moy']);
//            $loc->setNbrLocation($bestDistrictsJson[$i]['value']['all']);
//            $loc->setPosition($bestDistrictsJson[$i]['value']['position']);
//            $manager->persist($loc);
//        }
        for ($i = 0; $i < count($sportsJson); $i++) {
            $sport = new Sports();
            $sport->set
        }

        $manager->flush();
    }
}

