<?php

namespace App\Controller;

use App\Repository\LocationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LocationController extends AbstractController
{
    /**
     * @Route("/districts", name="district")
     * @param LocationRepository $locRep
     * @return JsonResponse
     */
    public function index(LocationRepository $locRep, Request $request)
    {
        // GET http://localhost:8000/districts?district=75019
        $district = $request->query->get('district');
        $locations = $locRep;
        $locFiltered = $locations->findByDistrict($district);
        return $this->json($locFiltered);
    }

    /**
     * @Route("/types", name="types")
     * @param LocationRepository $locRep
     * @param Request $request
     * @return JsonResponse
     */
    public function types(LocationRepository $locRep, Request $request)
    {
        // GET http://localhost:8000/types?district=75019
        $district = $request->query->get('district');
        $locations = $locRep;
//        $arrayValues = $persistentCollection->getValues();

//        $contact = $this->getDoctrine()
//            ->getRepository('KodAnnuaireBundle:Contact')
//            ->find($id);
//        $nom = $contact->getNom(); //pas de problème j'ai récupérer le nom
//        $adresses = $contact->getAdreses()->first(); // ??
//        first()
//        to_array()
//        collections

        $locFiltered = $locations->findByDistrict($district);


        $test = $locFiltered[0];
        dd($test);
//        for ($i = 0; $i < count($locFiltered); $i++) {
//            $test = $locFiltered[$i];
//            dd($test);
//        }
        dd($locFiltered);
        return $this->json($locFiltered);
    }
}
