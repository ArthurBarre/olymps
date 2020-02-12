<?php

namespace App\DataFixtures;
use App\Entity\Infrastructure;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $infra = file_get_contents('http://localhost:8000/data.json');
        $types = file_get_contents('http://localhost:8000/data-types.json');

        $json = json_decode($infra, true);
        $json2 = json_decode($types, true);

        for ($i = 0; $i < count($json); $i++) {
            $gym = new Infrastructure();
            $gym->setLat($json[$i]['lat']);
            $gym->setLng( $json[$i]["long"]);
            $gym->setTypes( intval( $json2[$i]['types']));
            $manager->persist($gym);
        }

        $manager->flush();
    }
}