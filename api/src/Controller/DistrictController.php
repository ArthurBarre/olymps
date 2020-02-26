<?php


namespace App\Controller;

use App\Entity\BestDistrict;
use App\Repository\BestDistrictRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DistrictController extends AbstractController
{

    /**
     * @Route("/district_info", name="district_info")
     * @param BestDistrictRepository $bdRep
     * @param Request $request
     * @return JsonResponse
     */
    public function districtById(BestDistrictRepository $bdRep, Request $request)
    {
        // GET http://localhost:8000/district_info?district=75019
        $district = $request->query->get('district');
        $district_info = $bdRep;
        $districtFiltered = $district_info->findByDistrict($district);

        return $this->json($districtFiltered);
    }


}
