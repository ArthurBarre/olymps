<?php


namespace App\Controller;

use App\Entity\Location;
use App\Repository\LocationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LocationController extends AbstractController
{

   /**
    * @Route("/district", name="district")
    * @param LocationRepository $locRep
    * @param Request $request
    * @return JsonResponse
    */
   public function districtById(LocationRepository $locRep, Request $request)
   {
       // GET http://localhost:8000/district?district=75019
       $district = $request->query->get('district');
       $locations = $locRep;
       $locFiltered = $locations->findByDistrict($district);

       return $this->json($locFiltered);
   }

    /**
     * @Route("/districts", name="districts")
     * @param LocationRepository $locRep
     * @return JsonResponse
     */
    public function allDistricts(LocationRepository $locRep)
    {
        // GET http://localhost:8000/districts
        $locations = $locRep;
        $allLoc = $locations->findAll();
        return $this->json($allLoc);
    }

}
