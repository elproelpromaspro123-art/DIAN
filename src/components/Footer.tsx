import { ExternalLink, Heart, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#131313] text-[#f2f2f2] py-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="w-5 h-5 text-dian-gold shrink-0" />
              <h3 className="font-semibold text-sm">Aviso Legal</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Este es un proyecto educativo independiente y sin fines de lucro.
              <strong className="text-white/90">
                {" "}No está afiliado, respaldado ni asociado con la DIAN, la CNSC
                o SIMO.
              </strong>
            </p>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">
              Este proyecto es independiente y no representa a la DIAN ni a SIMO.
            </p>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">
              La información se recopiló de documentos y comunicados oficiales:
            </p>
            <div className="flex flex-wrap gap-3 mt-3 text-xs">
              <a
                href="https://simo.cnsc.gov.co/#/ofertaEmpleo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dian-gold hover:underline inline-flex items-center gap-1"
              >
                SIMO
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.cnsc.gov.co/node/59797"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dian-gold hover:underline inline-flex items-center gap-1"
              >
                CNSC
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.dian.gov.co/Prensa/Paginas/NG-Inician-inscripciones-en-la-modalidad-abierta-del-concurso-de-meritos-DIAN-2676.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dian-gold hover:underline inline-flex items-center gap-1"
              >
                DIAN
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <div className="flex items-center gap-2 mb-3 md:justify-end">
              <Heart className="w-5 h-5 text-dian-gold shrink-0" />
              <h3 className="font-semibold text-sm">Proyecto Educativo</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Hecho para aspirantes que se preparan de forma rigurosa y responsable
              para ingresar a la DIAN.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6">
          <p className="text-xs text-white/40 text-center">
            DIAN® y CNSC® son marcas registradas de sus respectivas entidades.
            Este sitio no representa ni actúa en nombre de dichas instituciones.
          </p>
        </div>
      </div>
    </footer>
  );
}


