<?php

namespace App\Controller;

use App\Repository\LocationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
