def to_rna(dna_strand):
    rna_strand = []
    for base in dna_strand:
        if base == "G":
            rna_strand.append("C")
        elif base == "C":
            rna_strand.append("G")
        elif base == "T":
            rna_strand.append("A")
        else:
            rna_strand.append("U")
    return "".join(rna_strand)
