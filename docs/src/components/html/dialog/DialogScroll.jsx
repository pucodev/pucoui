import DialogBase from '../../docs/DialogBase'

export default function DialogScroll() {
  const content = (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec dicuntur
        inconstantissime. At coluit ipse amicitias. Memini me adesse P. Id est
        enim, de quo quaerimus.
      </p>
      <p>
        Quae sequuntur igitur? Sed quid sentiat, non videtis. Idemne potest esse
        dies saepius, qui semel fuit? Memini vero, inquam;
      </p>
      <p>
        Sit hoc ultimum bonorum, quod nunc a me defenditur; Bork Cur haec eadem
        Democritus? Huius, Lyco, oratione locuples, rebus ipsis ielunior.
      </p>
      <p>
        Tecum optime, deinde etiam cum mediocri amico. Multoque hoc melius nos
        veriusque quam Stoici. Maximus dolor, inquit, brevis est. Quae hic rei
        publicae vulnera inponebat, eadem ille sanabat. Satis est ad hoc
        responsum. Respondeat totidem verbis. Quo modo autem philosophus
        loquitur? Quare attende, quaeso.
      </p>
      <p>
        Duo Reges: constructio interrete. Memini vero, inquam; Sed ea mala
        virtuti magnitudine obruebantur. Diodorus, eius auditor, adiungit ad
        honestatem vacuitatem doloris. Que Manilium, ab iisque M. Summus dolor
        plures dies manere non potest?
      </p>
    </div>
  )

  return <DialogBase content={content} isScrollable></DialogBase>
}
