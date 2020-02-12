<?php

namespace App\Controller;

use App\Repository\InfrastructureRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class InfraController extends AbstractController
{
    /**
     * @Route("/infra", name="infra")
     * @param InfrastructureRepository $infraRep
     * @return JsonResponse
     */
    public function index(InfrastructureRepository $infraRep)
    {
        $result = $infraRep->findAll();
        return $this->json($result);
    }
}
